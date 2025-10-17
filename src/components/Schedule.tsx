import { ArrowLeft, Calendar, MapPin, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { format } from 'date-fns';
import { ScheduleModel } from '@/models/schedule-model';

interface ScheduleProps {
  onBack: () => void;
  onNavigateToRulebook: () => void;
  onNavigateToTeams: () => void;
  onNavigateToLocations: () => void;
}

export function ScheduleInformation() {
  const [scheduleInformation, setScheduleInformation] = useState([]);

  useEffect(() => {
    fetch("https://api.stkpoolleague.com/v1/rdbms/db/schedule?sort=match_date", {
      mode: "cors",
      headers: {
        "Accept": "application/json"
      }
    })
      .then(resp => resp.json())
      .then((data: []) => setScheduleInformation(data))
    }, []);

    const weeklyScheduleMap = scheduleInformation.reduce((schedule, element) => {
      if (!schedule.has(element["week"])) {
        schedule.set(element["week"], [element])
      } else {
        schedule.get(element["week"])?.push(element)
      }
      return schedule;
    }, new Map<number, ScheduleModel[]>())

    return (
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {
          Array.from(weeklyScheduleMap.keys()).map(week => {
            return (
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-500">Week {week}</CardTitle>
                </CardHeader>

                <div className="grid md:grid-cols-2 gap-6">
                  {weeklyScheduleMap.get(week)?.map((match: ScheduleModel) => {
                    return (
                      <CardContent className="text-gray-300 space-y-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-red-500" />
                          <span>{match.location}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-red-500" />
                          <span>
                            {format(new Date(match.match_date), "EEEE, MMMM d")}
                          </span>
                        </div>
                        <p className="text-sm">
                          {match.away} @ {match.home}
                        </p>
                      </CardContent>
                    )
                  })}
                </div>
              </Card>
            )
          })
        }
      </div>
    )
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
            <button onClick={onNavigateToLocations} className="text-gray-300 hover:text-white transition-colors">Locations</button>
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

      <ScheduleInformation />
    </div>
  );
}