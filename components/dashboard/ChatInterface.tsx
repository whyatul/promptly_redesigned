'use client'

import { useState, useRef, useEffect, DragEvent } from 'react' // Added DragEvent
// Added FaTimes, FaFileAlt, FaUpload
import { FaPaperPlane, FaStopCircle, FaRobot, FaUser, FaPaperclip, FaThLarge, FaTimes, FaFileAlt, FaUpload } from 'react-icons/fa' 
import ToolsModal from './ToolsModal' 
import { Tool } from '@/data/toolsData' 

interface Message {
  sender: 'user' | 'ai'
  text: string
}

const ChatInterface = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isToolsModalOpen, setIsToolsModalOpen] = useState(false); 
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null); 
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null); 
  const fileInputRef = useRef<HTMLInputElement>(null); 

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);

 
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
    }
  }, [input]);

  const handleSend = async () => {
    if (!input.trim() && selectedFiles.length === 0) return 


    let messageText = input;
    if (selectedTool) {
      messageText = `Using tool "${selectedTool.title}":\n${input}`;
    }
    if (selectedFiles.length > 0) {
      const fileNames = selectedFiles.map(f => f.name).join(', ');
      messageText = `${messageText}\n\nAttached files: ${fileNames}`;
    }

    const userMessage: Message = { sender: 'user', text: messageText.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setSelectedFiles([]); 
    setIsLoading(true)


    await new Promise(resolve => setTimeout(resolve, 1500));

    const aiResponse: Message = {
      sender: 'ai',
      text: `Simulated AI response ${selectedTool ? `(using ${selectedTool.title})` : ''} ${selectedFiles.length > 0 ? `(processing ${selectedFiles.length} file(s))` : ''} to: "${userMessage.text}"\n\nThis is a minimalist response inspired by Claude AI's interface. The focus is on clarity and directness.`
    }
    setMessages(prev => [...prev, aiResponse])
    setIsLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  const handleFileUploadClick = () => {
    fileInputRef.current?.click(); 
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // Append new files to the existing list, avoiding duplicates
      const newFiles = Array.from(event.target.files);
      setSelectedFiles(prevFiles => {
        const existingNames = new Set(prevFiles.map(f => f.name));
        const uniqueNewFiles = newFiles.filter(f => !existingNames.has(f.name));
        return [...prevFiles, ...uniqueNewFiles];
      });
      // Reset file input value to allow selecting the same file again
      event.target.value = ''; 
    }
  };

  const removeFile = (fileName: string) => {
    setSelectedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  // --- Drag and Drop Handlers ---
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) {
       setIsDraggingOver(false);
    } else if (!e.relatedTarget) { 
       setIsDraggingOver(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
       setSelectedFiles(prevFiles => {
        const existingNames = new Set(prevFiles.map(f => f.name));
        const uniqueNewFiles = newFiles.filter(f => !existingNames.has(f.name));
        return [...prevFiles, ...uniqueNewFiles];
      });
    
    }
  };
  

  const handleToolsClick = () => {
    setIsToolsModalOpen(true); 
  };

  const closeToolsModal = () => {
    setIsToolsModalOpen(false); 
  };

  const handleToolSelect = (tool: Tool) => {
    setSelectedTool(tool);
    setInput(`Using ${tool.title}: `); 
    textareaRef.current?.focus(); 
    closeToolsModal(); 
  };

  const clearSelectedTool = () => {
    setSelectedTool(null);
  };

  return (
  
    <div 
      className="flex-1 flex flex-col bg-background relative" // Added relative positioning
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    > 
      {/* Drag-over Overlay */}
      {isDraggingOver && (
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm border-2 border-dashed border-primary rounded-lg z-20 flex items-center justify-center pointer-events-none">
          <div className="text-center text-primary font-medium">
            <FaUpload size={48} className="mx-auto mb-4" />
            <p>Drop files here to attach</p>
          </div>
        </div>
      )}

      {/* Message Display Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-5 scrollbar-hide">
        
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
            <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6">
               <FaRobot size={32} className="text-primary opacity-80" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Welcome to Promptly</h2>
            <p className="max-w-sm">Start by seclecting the tool that you wanna work with and typing your message below or attach a file to begin.</p>
          </div>
        )}

        {messages.map((msg, index) => (
          <div key={index} className={`flex w-full max-w-4xl mx-auto ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-subtle-fade-in`}>
            <div className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              {/* Avatar styling */}
              <div className={`flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center text-xs font-medium ${msg.sender === 'user' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                {msg.sender === 'user' ? <FaUser size={11} /> : <FaRobot size={11} />}
              </div>
             
              <div className={`px-4 py-2.5 rounded-xl max-w-xl md:max-w-2xl ${msg.sender === 'user' ? 'bg-primary/10 text-foreground rounded-br-sm' : 'bg-card text-foreground rounded-bl-sm border border-border/50'}`}>
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area Wrapper */}
      <div className="p-4 bg-background/90 backdrop-blur-sm border-t border-border/50 sticky bottom-0 z-10">
        {/* Container for Tags + Input Box */}
        <div className="max-w-4xl mx-auto">
          {/* Selected Tool Tag */}
          {selectedTool && (
            <div className="mb-2 flex items-center space-x-2 animate-subtle-fade-in">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted/80 text-foreground/80 border border-border/50">
                <FaThLarge className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                {selectedTool.title}
                <button 
                  onClick={clearSelectedTool} 
                  className="ml-2 -mr-1 p-0.5 rounded-full text-muted-foreground/70 hover:bg-muted hover:text-foreground"
                  aria-label="Remove selected tool"
                >
                  <FaTimes className="h-3 w-3" />
                </button>
              </span>
            </div>
          )}

          {/* Selected Files Tags */}
          {selectedFiles.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-2 animate-subtle-fade-in">
              {selectedFiles.map((file) => (
                <span 
                  key={file.name} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted/80 text-foreground/80 border border-border/50"
                >
                  <FaFileAlt className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                  <span className="max-w-[150px] truncate" title={file.name}>{file.name}</span>
                  <button 
                    onClick={() => removeFile(file.name)} 
                    className="ml-2 -mr-1 p-0.5 rounded-full text-muted-foreground/70 hover:bg-muted hover:text-foreground"
                    aria-label={`Remove file ${file.name}`}
                  >
                    <FaTimes className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Input Box */}
          <div className="flex items-end space-x-3 bg-card border border-border/50 rounded-xl p-2 shadow-sm">
            {/* Tools Button */}
            <button
              onClick={handleToolsClick} 
              className="px-3 py-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200 flex-shrink-0 flex items-center text-sm" 
              title="Explore Tools"
              aria-label="Explore Tools"
            >
              <FaThLarge size={16} className="mr-1.5" />
              <span>Tools</span> 
            </button>
            
            {/* File Upload Button */}
            <button
              onClick={handleFileUploadClick} // Updated onClick handler
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200 flex-shrink-0" 
              title="Attach file"
              aria-label="Attach file"
            >
              <FaPaperclip size={18} />
            </button>
            {/* Hidden File Input */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange}
              className="hidden" 
              multiple 
            />
            
            {/* Text Input */}
            <textarea
              ref={textareaRef} 
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              // Updated placeholder
              placeholder={selectedTool ? `Continue with ${selectedTool.title}...` : (selectedFiles.length > 0 ? "Add a message or send files..." : "Send a message...")} 
              className="input flex-1 resize-none overflow-y-auto bg-transparent border-none focus:ring-0 p-2.5 text-sm max-h-52 scrollbar-hide placeholder:text-muted-foreground/70" 
              disabled={isLoading}
            />
            {/* Send/Stop Button */}
            <div className="flex-shrink-0 self-end pb-0.5"> 
              {isLoading ? (
                <button className="p-2.5 rounded-lg text-muted-foreground hover:text-red-500 transition-colors duration-200" onClick={() => setIsLoading(false)} title="Stop Generation">
                  <FaStopCircle size={20} />
                </button>
              ) : (
                <button
                  onClick={handleSend}
                  // Enable send if input has text OR files are selected
                  className={`p-2.5 rounded-lg transition-colors duration-200 ${(input.trim() || selectedFiles.length > 0) ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`} 
                  disabled={(!input.trim() && selectedFiles.length === 0) || isLoading}
                  title="Send Message"
                >
                  <FaPaperPlane size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Render the Tools Modal */}
      <ToolsModal isOpen={isToolsModalOpen} onClose={closeToolsModal} onToolSelect={handleToolSelect} />
    </div>
  )
}

export default ChatInterface
