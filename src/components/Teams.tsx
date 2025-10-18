import { ArrowLeft, Users, Calendar, MapPin, Trophy, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LocationModel } from '@/models/location-model';

interface TeamsProps {
  onBack: () => void;
  onNavigateToRulebook: () => void;
  onNavigateToLocations: () => void;
  onNavigateToSchedule: () => void;
}

export function TeamInfo() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://api.stkpoolleague.com/v1/rdbms/db/locations", {
      mode: "cors",
      headers: {
        "Accept": "application/json"
      }
    })
      .then(resp => resp.json())
      .then((data: []) => setTeams(data))
    }, [teams]
  );

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
    {
      teams.map((team: LocationModel) => {
        return (
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                {team.short_name} {team.match_day}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>{team.long_name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-red-500" />
                <span>{team.match_day} at {team.match_time}</span>
              </div>
              <p className="text-sm">
                {team.short_description}
              </p>
            </CardContent>
          </Card>
        )
      })
    }
    </div>
  )
}

export function Teams({ onBack, onNavigateToRulebook, onNavigateToLocations, onNavigateToSchedule }: TeamsProps) {
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
            <span className="text-white bg-gray-700 px-3 py-2 rounded">Teams</span>
            <button onClick={onNavigateToLocations} className="text-gray-300 hover:text-white transition-colors">Locations</button>
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
              <span className="text-white bg-gray-700 px-3 py-2 rounded text-left">
                Teams
              </span>
              <button 
                onClick={() => {
                  onNavigateToLocations();
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Locations
              </button>
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
                At the end of each month, teams compete at the Epic Shots Invitational at Amsterdam Billiards for the championship pot.
              </p>
            </div>
          </CardContent>
        </Card>

        <TeamInfo />

        {/* Team Competition */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <Trophy className="w-6 h-6 mr-3" />
              Team Competition & Rewards
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-white mb-3">Individual Play, Team Pride</h4>
                <ul className="space-y-2 text-sm">
                  <li>&bull; Players compete individually in each round</li>
                  <li>&bull; Wins and raffle tickets count toward team totals</li>
                  <li>&bull; Away wins earn extra raffle tickets for the whole team</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3">Monthly Team Championships</h4>
                <ul className="space-y-2 text-sm">
                  <li>&bull; Epic Shots Invitationals at Amsterdam Billiards</li>
                  <li>&bull; Top 2 teams get guaranteed entry</li>
                  <li>&bull; Team members split 50% of prize money</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}