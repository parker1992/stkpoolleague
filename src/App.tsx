import { Target, Calendar, Trophy, Instagram, Youtube, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="#home" className="flex items-center space-x-3">
              <img src="./STKLogo.PNG" alt="STK Pool League" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold text-white">STK Pool League</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white bg-gray-700 px-3 py-2 rounded transition-colors">Home</a>
            <button onClick={() => navigate('/rulebook')} className="text-gray-300 hover:text-white transition-colors">Rulebook</button>
            <button onClick={() => navigate('/teams')} className="text-gray-300 hover:text-white transition-colors">Teams</button>
            <button onClick={() => navigate('/locations')} className="text-gray-300 hover:text-white transition-colors">Locations</button>
            <button onClick={() => navigate('/schedule')} className="text-gray-300 hover:text-white transition-colors">Schedule</button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => {
                  navigate('/');
                  setMobileMenuOpen(false);
                }}
                className="text-white bg-gray-700 px-3 py-2 rounded transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  navigate('/rulebook');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Rulebook
              </button>
              <button 
                onClick={() => {
                  navigate('/teams');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Teams
              </button>
              <button 
                onClick={() => {
                  navigate('/locations');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Locations
              </button>
              <button 
                onClick={() => {
                  navigate('/schedule');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
               Schedule 
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            JOIN NYC'S MOST REWARDING POOL LEAGUE
          </h1>
          
          {/* Logo */}
          <div className="my-16 flex justify-center">
            <img src="./STKLogo.PNG" alt="Shoot to Kill Pool League" className="w-80 h-80" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            12 Weeks. 1 Shot at Glory.
          </h2>
          <p className="text-xl text-red-500 font-semibold mb-6">
            League Membership: $50 / Season
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Weekly cash prizes, monthly Epic Shots Invitationals, and exclusive raffle access
            throughout Season 2.
          </p>
          <Button 
            onClick={() => navigate('/rulebook')}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 text-lg"
          >
            View Official Rulebook
          </Button>
        </div>
      </section>

      {/* Season Format Section */}
      <section id="season-format" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            SEASON FORMAT
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-700 border-gray-600 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">12 Weeks</h3>
                <p className="text-gray-300">Season 2</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">5 Teams</h3>
                <h3 className="text-2xl font-bold text-white mb-2">5 Venues</h3>
                <p className="text-gray-300">Weeknight Competition</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Monthly Invitationals</h3>
                <p className="text-gray-300">At Amsterdam Billiards</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-red-600 text-white text-center py-6 px-8 rounded-lg">
            <p className="text-xl font-semibold">
              Monthly Epic Shots Invitationals with cash prizes for players and teams.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section id="rulebook" className="py-20 px-4 bg-gray-700">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            WHAT MAKES US DIFFERENT:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-4">Weekly Cash Prizes</h3>
                <p className="text-gray-300 mb-4">
                  Every week features cash prizes for individual performance and team achievements.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Individual weekly prizes</li>
                  <li>• Team performance bonuses</li>
                  <li>• Consistent payout structure</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-4">Epic Shots Invitationals</h3>
                <p className="text-gray-300 mb-4">
                  Monthly tournaments at Amsterdam Billiards with substantial prize pools.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Monthly tournament format</li>
                  <li>• Premium venue location</li>
                  <li>• Increased prize opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            FOLLOW THE ACTION
          </h2>
          <div className="flex justify-center space-x-8">
            <a href="https://www.instagram.com/stkpoolleague" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Instagram className="h-8 w-8" />
              <span className="text-lg">@stkpoolleague</span>
            </a>
            <a href="https://www.youtube.com/@STKPoolLeague" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Youtube className="h-8 w-8" />
              <span className="text-lg">STK Pool League</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;