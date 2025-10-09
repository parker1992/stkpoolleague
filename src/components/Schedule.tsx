import { ArrowLeft, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';

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

      {/* Schedule Content */}
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
          MATCH SCHEDULE
        </h1>

        <Table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Date</th>
              <th>Home</th>
              <th>Away</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Monday, October 13</td>
              <td>Amsterdam</td>
              <td>Josie Wood's</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Thursday, October 16</td>
              <td>Sugar Mouse</td>
              <td>Barfly</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Monday, October 20</td>
              <td>Amsterdam</td>
              <td>Sugar Mouse</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Wednesday, October 22</td>
              <td>Josie Wood's</td>
              <td>Barfly</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sunday, October 26</td>
              <td>Barfly</td>
              <td>Amsterdam</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Thursday, October 30</td>
              <td>Sugar Mouse</td>
              <td>Josie Wood's</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Sunday, November 2</td>
              <td>Barfly</td>
              <td>Sugar Mouse</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Wednesday, November 5</td>
              <td>Josie Wood's</td>
              <td>Amsterdam</td>
            </tr>
          </tbody>
        </Table>

        <h4 className="text-2xl md:text-2xl font-bold text-center text-white mb-12">
          Next Invitational: Monday, November 10 @ Amsterdam
        </h4>

        </div>
      </div>
  );
}