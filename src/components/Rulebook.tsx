import { ArrowLeft, Target, Users, Calendar, Trophy, Ticket, Menu, X, Tally5, Medal } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export function Rulebook() {
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
            <span className="text-white bg-gray-700 px-3 py-2 rounded">Rulebook</span>
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
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <span className="text-white bg-gray-700 px-3 py-2 rounded text-left">
                Rulebook
              </span>
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
                  navigate('locations');
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
          onClick={() => navigate('/')}
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
            <p className="text-xl font-semibold text-white">$50 for 12 weeks of competition</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Player Entry Fees:</h4>
                <ul className="space-y-1">
                  <li>&bull; $30 (includes 2 rounds + shootout)</li>
                  <li>&bull; $40 (non-league members)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Epic Shots Invitational:</h4>
                <ul className="space-y-1">
                  <li>&bull; $25 full buy</li>
                  <li>&bull; $15 re-buy</li>
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
                <h4 className="font-bold text-white">Peck Slip Tuesdays (Boot Camp)</h4>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-white">Josie Wood's Wednesdays</h4>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-white">Sugar Mouse Thursdays</h4>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-white">Barfly Sundays</h4>
              </div>
            </div>
            <p>Each team has <span className="font-bold">10 players</span>.</p>
            <p>A minimum of <span className="font-bold">4 players</span> (maximum of 6) from each team must play for a scheduled match or the team <span className="font-bold">forfeits</span>.</p>
            <p>If more than 4 players play, the <span className="font-bold">top 4 performers' points</span> count towards the team totals that night.</p>
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
              <p>Free practice on non-match nights.</p>
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
              <h4 className="font-bold text-white mb-3">Round 1</h4>
              <p>Standard scoring applies: every pocketed ball equals <span className="font-bold">1 point</span>.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Round 2 &mdash; Double Points</h4>
              <p>Every pocketed ball earns <span className="text-bold">double points</span>. This roound determines who rises in total standings.</p>
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

        {/* Invitational */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              The Invitational
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-6">
            <p>The <span className="font-bold">STK Invitational</span> is where the season's best earn their shot at glory &mdash; and their biggest payday of the season.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Qualification</h4>
                <ul className="space-y-2">
                  <li className="space-y-2">&bull; The <span className="font-bold">top two teams</span> from league standings qualify automatically.</li>
                  <li className="space-y-2">&bull; The <span className="font-bold">top 20 individual players</span> by points also qualify, regardless of team performance.</li>
                  <li className="space-y-2">&bull; A <span className="font-bold">waitlist of 10 additional players</span> will be held in order of total points, ready to fill any open spots.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Format</h4>
                <p>The Invitational uses the <span className="font-bold">same 3-round match structure</span> as regular league play:</p>
                <ul className="space-y-2">
                  <li className="space-y-2">&bull; <span className="font-bold">Round 1:</span> full buy.</li>
                  <li className="space-y-2">&bull; <span className="font-bold">Round 2:</span> half buy; double points.</li>
                  <li className="space-y-2">&bull; <span className="font-bold">Round 3:</span> Shootout between the top two from each round.</li>
                  <li className="space-y-2">&bull; First-place finishers in rounds 1 & 2 start with one extra strike.</li>
                  <li className="space-y-2">&bull; Second-place finishers enter from the loser's bracket with their original strike handicap.</li>
                  <li className="space-y-2">&bull; Shootout points: <span className="font-bold">1st = 20; 2nd = 10; 3rd/4th: 5</span></li>
                </ul>
              </div>
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
              <p>Every ball counts &mdash; and every match could define your season.</p>
            </div>
          </CardContent>
        </Card>

        {/* Earn Your Drip */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <Ticket className="w-6 h-6 mr-3" />
              Earn Your Drip
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>At STK, nothing’s given — everything’s earned.</p>
            <p>Your points don’t just show how you play… they decide what you deserve to wear.</p>
            <p>Rack up enough, and you unlock access to the exclusive drops.</p>
            <ul className="space-y-2">
              <li className="space-y-2">
                <p className="font-bold">100 Points &mdash; Keychain</p>
                <p>You’ve earned your tag. Buy it, rep it, and show you’re officially part of the league.</p>
              </li>
              <li className="space-y-2">
                <p className="font-bold">300 Points &mdash; Custom STK Jacket</p>
                <p>You can’t just order this. You have to earn the right to wear it. Only players with 300+ points can cop one.</p>
              </li>
              <li className="space-y-2">
                <p className="font-bold">500 Points &mdash; Killah Figure</p>
                <p>Your personal Killah comes to life once you’ve put in the work. Every win, every round — it all leads here.</p>
              </li>
              <li className="space-y-2">
                <p className="font-bold">Invitational Win &mdash; Champion Patch</p>
                <p>This one can’t be bought. Win the Invitational, and you’ll wear proof that you took it all.</p>
              </li>
              <li className="space-y-2">
                <p className="font-bold">Follow <a href="https://www.instagram.com/stkpoolleague" className="hover:text-white transition-colors">@STKPoolLeague</a> on Instagram &mdash; Sticker</p>
                <p>No points required. Hit follow, grab a sticker, and start your grind.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}