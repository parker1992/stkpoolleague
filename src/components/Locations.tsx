import { ArrowLeft, MapPin, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LocationsProps {
  onBack: () => void;
  onNavigateToRulebook: () => void;
  onNavigateToTeams: () => void;
  onNavigateToSchedule: () => void;
}

export function Locations({ onBack, onNavigateToRulebook, onNavigateToTeams, onNavigateToSchedule }: LocationsProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button onClick={onBack} className="flex items-center space-x-3">
              <img src="/STKLogo.PNG" alt="STK Pool League" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold text-white">STK Pool League</span>
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={onBack} className="text-gray-300 hover:text-white transition-colors">Home</button>
            <button onClick={onNavigateToRulebook} className="text-gray-300 hover:text-white transition-colors">Rulebook</button>
            <button onClick={onNavigateToTeams} className="text-gray-300 hover:text-white transition-colors">Teams</button>
            <span className="text-white bg-gray-700 px-3 py-2 rounded">Locations</span>
            <button onClick={onNavigateToSchedule} className="text-gray-300 hover:text-white transition-colors">Schedule</button>
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
                  onBack();
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onNavigateToRulebook();
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Rulebook
              </button>
              <button 
                onClick={() => {
                  onNavigateToTeams();
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Teams
              </button>
              <span className="text-white bg-gray-700 px-3 py-2 rounded text-left">
                Locations
              </span>
              <button 
                onClick={() => {
                  onNavigateToSchedule();
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
          onClick={onBack}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      {/* Locations Content */}
      <div className="container mx-auto px-4 pb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
          VENUE LOCATIONS
        </h1>

        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Four premier NYC venues hosting weekly league play. Each location offers its own unique atmosphere 
          while maintaining the high standards of competition that define the STK Pool League.
        </p>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Amsterdam Billiards */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Amsterdam Billiards
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">110 E 10th St.</p>
                    <p>New York, NY 10003</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>Mondays at 9pm</span>
                </div>
              </div>
              <div className="bg-red-600 text-white p-3 rounded-lg">
                <p className="font-semibold text-sm">🏆 Epic Shots Invitational Host Venue</p>
              </div>
              <p className="text-sm">
                The flagship venue of NYC billiards. Amsterdam Billiards hosts our monthly Epic Shots Invitationals 
                and serves as the championship battleground where teams compete for the biggest prizes.
              </p>
            </CardContent>
          </Card>

          {/* Peck Slip Social */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Peck Slip Social
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">36 Peck Slip</p>
                    <p>New York, NY 10038</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>Tuesdays at 9pm</span>
                </div>
              </div>
              <p className="text-sm">
                Located in the heart of the Financial District, Peck Slip Social combines competitive pool 
                with a vibrant social atmosphere. Great food, craft cocktails, and quality tables make this 
                a favorite among league players.
              </p>
            </CardContent>
          </Card>

          {/* Josie Woods Pub */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Josie Woods Pub
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">11 Waverly Pl.</p>
                    <p>New York, NY 10003</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>Wednesdays at 9pm</span>
                </div>
              </div>
              <p className="text-sm">
                A classic Greenwich Village pub with authentic character and a welcoming neighborhood feel. 
                Josie Woods offers the perfect mid-week escape with competitive pool in a relaxed, 
                traditional pub setting.
              </p>
            </CardContent>
          </Card>

          {/* Sugar Mouse */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Sugar Mouse
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">47 3rd Ave.</p>
                    <p>New York, NY 10003</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>Thursdays at 9pm</span>
                </div>
              </div>
              <p className="text-sm">
                An intimate East Village venue with a cozy, underground vibe. Sugar Mouse provides 
                the perfect setting to end your week with serious competition and great company in 
                a uniquely NYC atmosphere.
              </p>
            </CardContent>
          </Card>

          {/* Barfly */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Barfly
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">244 3rd Avenue</p>
                    <p>New York, NY 10010</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>Sundays at 9pm</span>
                </div>
              </div>
              <p className="text-sm">
                Barfly is that perfect New York ix of grit and charm&mdash;the kind of spot where the drinks are strong, the bartenders actually care, and the pool table in the back is always calling your name. It's got that no-nonsense, after-work energy where games get competitive fast, strangers become teammates, and the crowd's just rowdy enough to keep it fun. STK nights here hit different&mdash;it's where the neighborhood meets the hustle, cue in hand, and nothing but bragging rights on the line.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500">Getting There</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-white mb-3">Transportation</h4>
                <p className="text-sm">
                  All venues are easily accessible by subway and located in vibrant NYC neighborhoods. 
                  Each location offers convenient access to public transportation and nearby dining options.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3">Venue Amenities</h4>
                <p className="text-sm">
                  Professional-grade pool tables, full bar service, food options, and comfortable seating areas. 
                  Each venue maintains the quality standards expected by serious pool players.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}