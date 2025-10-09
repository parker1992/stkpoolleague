import { ArrowLeft, Calendar, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ScheduleProps {
  onBack: () => void;
  onNavigateToRulebook: () => void;
  onNavigateToTeams: () => void;
  onNavigateToLocations: () => void;
  onNavigateToSchedule: () => void;
}

export function Schedule({ onBack, onNavigateToRulebook, onNavigateToTeams, onNavigateToLocations }: ScheduleProps) {
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
            <button onClick={onNavigateToLocations} className="text-gray-300 hover:text-white transition-colors">Teams</button>
            <span className="text-white bg-gray-700 px-3 py-2 rounded">Schedule</span>
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
              <button 
                onClick={() => {
                  onNavigateToLocations();
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Locations
              </button>
              <span className="text-white bg-gray-700 px-3 py-2 rounded text-left">
                Schedule
              </span>
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


      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Week 1 Card */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">Week 1</CardTitle>
            </CardHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <CardContent className="text-gray-300 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Amsterdam</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <span>Monday, October 13</span>
                  </div>
                  <p className="text-sm">
                    Josie Wood's @ Amsterdam
                  </p>
                </CardContent>
                <CardContent className="text-gray-300 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Sugar Mouse</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <span>Thursday, October 16</span>
                  </div>
                  <p className="text-sm">
                    Barfly @ Sugar Mouse
                  </p>
                </CardContent>
              </div>
          </Card>
          
          {/* Week 2 Card */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">Week 2</CardTitle>
            </CardHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <CardContent className="text-gray-300 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Amsterdam</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <span>Monday, October 20</span>
                  </div>
                  <p className="text-sm">
                    Sugar Mouse @ Amsterdam
                  </p>
                </CardContent>
                <CardContent className="text-gray-300 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Josie Wood's</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <span>Wednesday, October 22</span>
                  </div>
                  <p className="text-sm">
                    Barfly @ Josie Wood's
                  </p>
                </CardContent>
              </div>
          </Card>

          {/* Week 3 Card */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">Week 3</CardTitle>
            </CardHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <CardContent className="text-gray-300 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Barfly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <span>Sunday, October 26</span>
                  </div>
                  <p className="text-sm">
                    Amsterdam @ Barfly
                  </p>
                </CardContent>
                <CardContent className="text-gray-300 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Sugar Mouse</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <span>Thursday, October 30</span>
                  </div>
                  <p className="text-sm">
                    Josie Wood's @ Sugar Mouse
                  </p>
                </CardContent>
              </div>
          </Card>

          {/* Week 4 Card */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">Week 4</CardTitle>
            </CardHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <CardContent className="text-gray-300 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Barfly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <span>Sunday, November 2</span>
                  </div>
                  <p className="text-sm">
                    Sugar Mouse @ Barfly
                  </p>
                </CardContent>
                <CardContent className="text-gray-300 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Josie Wood's</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <span>Wednesday, November 5</span>
                  </div>
                  <p className="text-sm">
                    Amsterdam @ Josie Wood's
                  </p>
                </CardContent>
              </div>
          </Card>
        </div>
      </div>
  );
}