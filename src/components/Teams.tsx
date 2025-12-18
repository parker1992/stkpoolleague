import { ArrowLeft, Users, Calendar, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export function Teams() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="flex items-center space-x-3">
              <img src="/STKLogo.PNG" alt="STK Pool League" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold text-white">STK Pool League</span>
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/')} className="text-gray-300 hover:text-white transition-colors">Home</button>
            <button onClick={() => navigate('/rulebook')} className="text-gray-300 hover:text-white transition-colors">Rulebook</button>
            <span className="text-white bg-gray-700 px-3 py-2 rounded">Teams</span>
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
                className="text-gray-300 hover:text-white transition-colors text-left"
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
              <span className="text-white bg-gray-700 px-3 py-2 rounded text-left">
                Teams
              </span>
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

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button 
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      {/* Teams Content */}
      <div className="container mx-auto px-4 pb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
          LEAGUE TEAMS
        </h1>

        {/* Team Format Overview */}
        <Card className="bg-gray-800 border-gray-700 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <Users className="w-6 h-6 mr-3" />
              Team Format
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p className="text-lg">
              There are 5 teams to join during the summer season. Players choose their most convenient night and location as their home team.
            </p>
            <p>
              Players enter each round as individuals, but represent their team in wins and raffle ticket accumulation.
            </p>
            <div className="bg-red-600 text-white p-4 rounded-lg">
              <p className="font-semibold">
                Teams compete at the Epic Shots Invitational at Amsterdam Billiards for the championship pot.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Amsterdam Mondays
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Amsterdam Billiards</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-red-500" />
                <span>Mondays at 9pm</span>
              </div>
              <p className="text-sm">
                Home venue for the Epic Shots Invitationals. Classic NYC billiards hall with a competitive atmosphere.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <span className="font-bold text-red-500">Schedule</span>
                <div>
                  <ul className="space-y-2 text-sm">
                    <li>Oct 13 &mdash; vs. Josie Wood's</li>
                    <li>Oct 20 &mdash; vs. Sugar Mouse</li>
                    <li>Oct 26 &mdash; @ Barfly</li>
                    <li>Nov 5 &mdash; @ Barfly</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Peck Slip Tuesdays
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Peck Slip Social</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-red-500" />
                <span>Tuesdays at 9pm</span>
              </div>
              <p className="text-sm">
                Social atmosphere with great food and drinks. Perfect for players who enjoy a relaxed competitive environment.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <span className="font-bold text-red-500">Boot Camp Schedule</span>
                <div>
                  <ul className="space-y-2 text-sm">
                    <li>Oct 14 &mdash; Bridge Basics</li>
                    <li>Oct 21 &mdash; Smooth Stroke</li>
                    <li>Oct 28 &mdash; Stance</li>
                  </ul>
                </div>
              </div> 
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Josie Wood's Wednesdays
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Josie Wood's Pub</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-red-500" />
                <span>Wednesdays at 9pm</span>
              </div>
              <p className="text-sm">
                Traditional pub setting with a friendly neighborhood vibe. Great for mid-week competition and socializing.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <span className="font-bold text-red-500">Schedule</span>
                <div>
                  <ul className="space-y-2 text-sm">
                    <li>Oct 13 &mdash; @ Amsterdam</li>
                    <li>Oct 22 &mdash; vs. Barfly</li>
                    <li>Oct 30 &mdash; @ Sugar Mouse</li>
                    <li>Nov 5 &mdash; vs. Amsterdam</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Sugar Mouse Thursdays
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Sugar Mouse</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-red-500" />
                <span>Thursdays at 9pm</span>
              </div>
              <p className="text-sm">
                Intimate venue with a cozy atmosphere. Perfect for ending the week with competitive pool and good company.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <span className="font-bold text-red-500">Schedule</span>
                <div>
                  <ul className="space-y-2 text-sm">
                    <li>Oct 16 &mdash; vs. Barfly</li>
                    <li>Oct 20 &mdash; @ Amsterdam</li>
                    <li>Oct 30 &mdash; vs. Josie Wood's</li>
                    <li>Nov 2 &mdash; @ Barfly</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Barfly Sundays
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Barfly</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-red-500" />
                <span>Sundays at 9pm</span>
              </div>
              <p className="text-sm">
                Barfly is classic New York—loud, lively, and built for players who like their pool with a side of chaos and cold beer.
              </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <span className="font-bold text-red-500">Schedule</span>
                  <div>
                    <ul className="space-y-2 text-sm">
                      <li>Oct 16 &mdash; @ Sugar Mouse</li>
                      <li>Oct 22 &mdash; @ Josie Wood's</li>
                      <li>Oct 26 &mdash; vs. Amsterdam</li>
                      <li>Nov 2 &mdash; vs. Sugar Mouse</li>
                    </ul>
                  </div>
                </div> 
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}