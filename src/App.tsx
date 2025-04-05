import React from 'react';
import { DollarSign, Twitter, Book, ImageIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#125826] font-sans">
      {/* Navigation */}
      <nav className="bg-[#C41E3A] p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-48 h-48 relative">
            <img 
              src="/Assets/photo_2025-04-03_06-55-14.jpg" 
              alt="Memeopoly Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex gap-6">
            <button className="nav-button"><Book className="w-5 h-5 mr-2" />Rules</button>
            <button className="nav-button"><ImageIcon className="w-5 h-5 mr-2" />Gallery</button>
            <button className="nav-button"><Twitter className="w-5 h-5 mr-2" />Community</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-20 bg-[#125826]">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-8xl font-bold text-[#FFD700] mb-4 monopoly-text">MEMEOPOLY</h1>
          <p className="text-3xl text-white mb-8 monopoly-text">Where Memes Own the Board!</p>
          <button className="cta-button">
            <DollarSign className="w-6 h-6 mr-2" />
            BUY NOW $Memeopoly
          </button>
        </div>
      </div>

      {/* Rules Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="monopoly-board">
            <h2 className="text-4xl font-bold text-center mb-12 monopoly-text text-[#FFD700]">
              MEMEOPOLY HOUSE RULES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "We Pass GO Every 300 Holders", desc: "Community growth = motion. Every 300 new holders? Everyone moves forward. Volume cures everything.", image: "/NewAssets/1dolla.jpg" },
                { title: "Supply Burns Every Lap", desc: "Make it around the board? Burn a chunk. Scarcity is the new rent.", image: "/NewAssets/5dolla.jpg" },
                { title: "Paper Hands Pay Double Rent", desc: "Sell before the ATH? Pay the diamond hands tax.", image: "/NewAssets/10dolla.jpg" },
                { title: "No Crying in the Casino", desc: "Wrecked? Good. Learn. Roll again.", image: "/NewAssets/20DolarsFR.png" },
                { title: "If You Shill It, You Fill It", desc: "Bag pumpers must buy the top too.", image: "/NewAssets/ShadowDolla.png" },
                { title: "Jeet Jail = Rugged", desc: "Landed in jail? You trusted a dev with hair and no LinkedIn.", image: "/NewAssets/mitchdolla.png" }
              ].map((rule, index) => (
                <div key={index} className="monopoly-property">
                  <div className="dollar-bill-container">
                    <img src={rule.image} alt="Dollar Bill" className="dollar-bill-image" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#FFD700]">{rule.title}</h3>
                  <p className="text-white">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Memeopoly Board Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="board-container">
            <img 
              src="/NewAssets/Memeopoly Board.png" 
              alt="Memeopoly Board" 
              className="w-full h-auto object-contain rounded-lg shadow-2xl border-4 border-[#FFD700]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#C41E3A] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center text-white hover:text-gray-200 transition-colors">
            <Twitter className="w-6 h-6 mr-2" />
            Join our X Community
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;