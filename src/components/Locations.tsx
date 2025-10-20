import { ArrowLeft, MapPin, Clock, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LocationModel } from '@/models/location-model';
import { useNavigate } from 'react-router-dom';

export function LocationInfo() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://api.stkpoolleague.com/v1/rdbms/db/locations", {
      mode: "cors",
      headers: {
        "Accept": "application/json"
      }
    })
      .then(resp => resp.json())
      .then((data: []) => setLocations(data))
    }, []
  );

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
    {
      locations.map((location: LocationModel) => {
        return (
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                {location.long_name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{location.address_1}</p>
                    <p>{location.address_2}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>{location.match_day} at {location.match_time}</span>
                </div>
              </div>
              {
                location.epic_shots_host ?
                (
                  <div className="bg-red-600 text-white p-3 rounded-lg">
                    <p className="font-semibold text-sm">🏆 Epic Shots Invitational Host Venue</p>
                  </div>
                )
                : null
              }
              
              <p className="text-sm">
                {location.long_description}
              </p>
            </CardContent>
          </Card>
        )
      })
    }
    </div>
  )
}

export function Locations() {
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
            <button onClick={() => navigate('/teams')} className="text-gray-300 hover:text-white transition-colors">Teams</button>
            <span className="text-white bg-gray-700 px-3 py-2 rounded">Locations</span>
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
              <button 
                onClick={() => {
                  navigate('/teams');
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
          onClick={() => navigate('/')}
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

        <LocationInfo />
      </div>
    </div>
  );
}