import { ArrowLeft, Target, Users, Calendar, Trophy, Ticket, Menu, X, Tally5, Medal } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RulebookProps {
  onBack: () => void;
  onNavigateToTeams: () => void;
  onNavigateToLocations: () => void;
  onNavigateToSchedule: () => void;
}

export function Rulebook({ onBack, onNavigateToTeams, onNavigateToLocations, onNavigateToSchedule }: RulebookProps) {
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
            <span className="text-white bg-gray-700 px-3 py-2 rounded">Rulebook</span>
            <button onClick={onNavigateToTeams} className="text-gray-300 hover:text-white transition-colors">Teams</button>
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
              <span className="text-white bg-gray-700 px-3 py-2 rounded text-left">
                Rulebook
              </span>
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

      {/* Rulebook Content */}
      <div className="container mx-auto px-4 pb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
          OFFICIAL RULEBOOK
        </h1>

        {/* League Membership */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <Target className="w-6 h-6 mr-3" />
              League Membership
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p className="text-xl font-semibold text-white">$50 for 12 weeks of competition throughout the summer season</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Player Entry Fees per Round:</h4>
                <ul className="space-y-1">
                  <li>&bull; $20 (league members)</li>
                  <li>&bull; $25 (non-league members)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Epic Shots Invitational:</h4>
                <ul className="space-y-1">
                  <li>&bull; $25 (league members only)</li>
                  <li>&bull; Non-league entry limited to 3 for the season</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Game Format */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500">Game Format</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>Everyone plays at once. Each player gets to shoot once per turn and they must pocket a ball. Any ball. If they miss, scratch, or foul, they get a strike. Depending on their handicap, once they reach their strike limit, they're eliminated.</p>
            <p>The player who breaks gets one extra shot if no ball is pocketed during the break. Last player standing wins the round.</p>
            <p>Players are handicapped based on APA, BCA, Fargo ratings or, if none are available, are judged by the game runner, then adjusted accordingly if needed.</p>
          </CardContent>
        </Card>

        {/* Player Handicaps */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500">Player Handicaps</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Rookie Reaper - 5 strikes</h4>
                  <p className="text-sm">New to the game. Looking to learn and level up.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Smooth Shooter - 4 strikes</h4>
                  <p className="text-sm">Has a feel for the table and a shot worth watchin.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Street Shark - 3 strikes</h4>
                  <p className="text-sm">The league standard. Knows what they're doing and is out to prove it.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Deadeye - 2 strikes</h4>
                  <p className="text-sm">Mistakes aren't an option. Precision is their only friend.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Ghost Tier - 3 strikes + challenge rule</h4>
                  <p className="text-sm">Pros play one-handed or have to bank every shot. Here to show how it's done.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Format */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <Users className="w-6 h-6 mr-3" />
              Team Format
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>There are 4 teams to join during the summer season:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-white">Amsterdam Mondays</h4>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-white">Peck Slip Tuesdays</h4>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-white">Josie Wood's Wednesdays</h4>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-white">Sugar Mouse Thursdays</h4>
              </div>
            </div>
            <p>Each team has <span className="font-bold">10 players</span>.</p>
            <p>A minimum of <span className="font-bold">4 players</span> (maximum of 6) from each team must play for a scheduled match or the team <span className="font-bold">forfeits</span>.</p>
            <p>If more than 4 players play, the <span className="font-bold">top 4 performers' points</span> count towards the team totals that night.</p>
          </CardContent>
        </Card>

        {/* League Schedule */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <Calendar className="w-6 h-6 mr-3" />
              League Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div>
              <p>The season runs for <span className="text-bold">4 weeks</span> of scheduled matches.</p>
              <p>Each team plays <span className="text-bold">one match per week</span> at its assigned venue or away game.</p>
              <p>The schedule ensures every team meets all others once during the season.</p>
            </div>
          </CardContent>
        </Card>

        {/* Nightly Showdown Format */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              Nightly Showdown Format
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-6">
            <p>Each match is made up of 3 rounds</p>
            <div>
              <h4 className="font-bold text-white mb-3">Round 1 &mdash; Full Buy</h4>
              <p>Every player buys in fully. Standard scoring applies: every pocketed ball equals <span className="font-bold">1 point</span>.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Round 2 &mdash; Half Buy, Double Points</h4>
              <p>The buy-in is half the usual amount, but every pocketed ball earns <span className="text-bold">double points</span>. This roound determines who rises in total standings.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Round 3 &mdash; Bonus Round Shootout</h4>
              <p>The <span className="text-bold">top two players</span> from each of the first two rounds advance to the shootout.</p>
              <p>The players who finished <span className="text-bold">first</span> in their respective rounds start with <span className="text-bold">an extra strike</span> (since they're in the winner's bracket).</p>
              <p>The <span className="text-bold">second-place finishers</span> keep their original strike handicap and enter from the loser's bracket.</p>
            </div>
            <div>
              <p>At the end of the shootout:</p>
              <ul className="space-y-2">
                <li className="space-y-2">&bull; <span className="text-bold">1st place</span> earns <span className="text-bold">20 bonus points</span></li>
                <li className="space-y-2">&bull; <span className="text-bold">2nd place</span> earns <span className="text-bold">10 bonus points</span></li>
                <li className="space-y-2">&bull; <span className="text-bold">3rd and 4th places</span> earn <span className="text-bold">5 bonus points each</span></li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Scoring */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <Tally5 className="w-6 h-6 mr-3" />
                Scoring
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div>
              <p>Every pocketed ball = 1 point.</p>
              <p>Team totals = combined points of the <span className="font-bold">top 4 players</span> from each side.</p>
              <p>The team with the <span className="font-bold">highest total</span> at the end of the match wins and earns match points (for standings and team prizes).</p>
              <p>
                <ol className="space-y-2 pl-10">
                  <li className="list-decimal space-y-2 font-bold">Top 20 Invitational qualification</li>
                  <li className="list-decimal space-y-2 font-bold">Merch unlocks and Killah progress</li>
                </ol>
              </p>
            </div>
          </CardContent>
        </Card>
      
      {/* Standings & Qualification*/}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <Medal className="w-6 h-6 mr-3" />
                Standings & Qualification
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div>
              <p><span className="font-bold">Team</span> wins determine their position in the league standings.</p>
              <p><span className="font-bold">Top teams</span> advance to the <span className="font-bold">Season Invitational</span> for cash prizes.</p>
              <p><span className="font-bold">Individual point leaders (Top 20)</span> automatically qualify for the <span className="font-bold">Invitational</span>, even if their team doesn’t.</p>
            </div>
          </CardContent>
        </Card>

        {/* Prizes */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <Trophy className="w-6 h-6 mr-3" />
              Prizes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-6">
            <div>
              <h4 className="font-bold text-white mb-3">Prize Pool &mdash; $4,000 Total</h4>
              <ul className="space-y-2">
                <li className="space-y-2">&bull; <span className="text-bold">$1,000</span> &mdash; Individual Champion</li>
                <li className="space-y-2">&bull; <span className="text-bold">$500</span> &mdash; Second Place Individual</li>
                <li className="space-y-2">&bull; <span className="text-bold">$2,000</span> &mdash; Winning Team (by cumulative points)</li>
                <li className="space-y-2">&bull; <span className="text-bold">$500</span> &mdash; Second Place Team (by cumulative points)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Raffles */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <Ticket className="w-6 h-6 mr-3" />
              Raffles
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <ul className="space-y-2">
              <li>&bull; Each league member receives one raffle ticket per RSVP and timely attendance upon check-in</li>
              <li>&bull; League Member receives one raffle ticket per home win or 2 per away win. Each of their team members also receive an extra raffle ticket on an away win</li>
              <li>&bull; Monthly raffles take place the last Thursday before the Epic Shots Invitational before round 1. (Players must be in attendance to claim their win or name their substitute)</li>
            </ul>
            <div className="bg-red-600 text-white p-4 rounded-lg mt-4">
              <h4 className="font-bold mb-2">Raffle Prizes Include:</h4>
              <p>Wildcard guaranteed entry into the Epic Shots Invitational, STK merchandise, Pool gear, or Team Masterclass with a pro.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}