
import './App.css'

function App() {
  return (
    <div className="app-container">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">✦</span>
          <h2>AURA</h2>
        </div>

        <button className="new-chat-button">
          + New Chat
        </button>

        <div className="sidebar-section">
          <p className="sidebar-label">WORKSPACE</p>
          <div className="sidebar-item">💬 Conversations</div>
          <div className="sidebar-item">📁 Knowledge Base</div>
          <div className="sidebar-item">🤖 AI Agents</div>
          <div className="sidebar-item">⚙️ Settings</div>
        </div>

        <div className="sidebar-bottom">
          <div className="user-profile">
            <div className="avatar">A</div>
            <div>
              <strong>Abishek</strong>
              <small>Personal Workspace</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="chat-area">

        <header className="top-bar">
          <span>New Conversation</span>
          <span className="model-label">AURA AI</span>
        </header>

        <section className="welcome-area">
          <div className="aura-symbol">✦</div>

          <h1>Hello, Abishek.</h1>

          <h2>How can I help you today?</h2>

          <p>
            Your intelligent companion for thinking,
            creating, learning and getting things done.
          </p>

          <div className="suggestion-cards">
            <div className="suggestion-card">
              <span>✧</span>
              <strong>Learn something</strong>
              <small>Explore a new topic or concept</small>
            </div>

            <div className="suggestion-card">
              <span>⌘</span>
              <strong>Write something</strong>
              <small>Create, improve and organise ideas</small>
            </div>

            <div className="suggestion-card">
              <span>⌕</span>
              <strong>Research something</strong>
              <small>Find answers and explore information</small>
            </div>
          </div>
        </section>

        {/* Message Input */}
        <div className="input-area">
          <div className="message-box">
            <input
              type="text"
              placeholder="Message AURA..."
            />
            <button className="send-button">↑</button>
          </div>

          <p className="input-footer">
            AURA can make mistakes. Verify important information.
          </p>
        </div>

      </main>
    </div>
  )
}

export default App
