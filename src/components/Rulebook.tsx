import { ArrowLeft, Target, Users, Calendar, Trophy, Ticket, Menu, X, Tally5, Medal, ArrowLeftRight } from 'lucide-react';
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
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">League Dues: $50 per season</h4>
                  <p className="text-sm">Covers official STK membership, eligibility for points, rewards, and access to all league activations.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Green Fees: $30 per night you play</h4>
                  <p className="text-sm">This goes directly into that night’s action and cash programming.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Point System</h4>
                  <p className="text-sm">Earn points every time you show up and play. Points can be exchanged for private lessons, masterclasses with pros or used to unlock STK merchandise.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Member Perks</h4>
                  <p className="text-sm">Access to sponsor-backed spirits tastings, special events, pop-ups, and partner activations throughout the season.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">STK Extras</h4>
                  <p className="text-sm">Priority invites to special tournaments, brand experiences, partner giveaways, and other chaos we cook up when the vibe is right.</p>
                </div>
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
            <p>A minimum of <span className="font-bold">4 players</span> (maximum of 6) from each team must play for a scheduled match or the team <span className="font-bold">forfeits</span> if they cannot fill player substitutions.</p>
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
              <p>Cash prizes on non-match nights.</p>
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
                Scoring in Team Matches
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p className="pb-5">Each team can field up to 6 players in a match. At the end of the night, only the top 4 scores count toward the team’s total. Those 4 determine the match outcome &mdash; but every player still earns individual points toward the Epic Shots Invitational qualification and merch unlocks.</p>
            <p className="pb-5">Your $30 entry covers all three rounds — standard scoring in Round 1, double points in Round 2, and a high-stakes Shootout for the top shooters in Round 3.</p>
            <p className="pb-5">Every ball pocketed earns you points toward cash, merch, and a spot in the Epic Shots Invitational. Top two teams qualify automatically, and the Top 20 individual players punch their own ticket.</p>
            <p>Cash nights at home bars run during away weeks, so you can invite your friends to play, drink, and see why this is the only pool league that feels like a night out. $50 locks in your 12-week season pass. Don’t just play — Shoot to Kill.</p>
          </CardContent>
        </Card>

        {/* Attendance */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              How Attendance Affects Your Payout
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p className="pb-5">Your payout after the Epic Shots Invitational depends on one thing &mdash; how often you show up.</p>
            <p className="pb-5">Each player’s share of their team’s winnings is based on attendance percentage.</p>
            <p className="pb-5">To earn 100% of your payout, you need to attend 12 matches total during the season.</p>
            <p className="pb-5">You can make up for any missed team matches by attending cash-out nights at other STK venues.</p>
            <p className="pb-5">Every appearance counts &mdash; whether you’re playing, supporting, or subbing in.</p>
            <h4 className="font-bold text-white mb-3">Example:</h4>
            <p className="pb-5">Your team wins $2,000 total.</p>
            <p className="pb-5">If you attended 12 matches, you earn your full share ($200).</p>
            <p className="pb-5">Attend 8 matches, earn half ($100).</p>
            <p className="pb-5">Attend 4, earn a quarter ($50).</p>
            <h4 className="font-bold text-white mb-3">Bottom Line:</h4>
            <p className="pb-5">Play anywhere. Show up often.</p>
            <p>Every match counts toward your cut &mdash; because loyalty deserves to get paid.</p>
          </CardContent>
        </Card>
      
        {/* Subbing */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              <ArrowLeftRight className="w-6 h-6 mr-3" />
              Subbing for Other Teams
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p className="pb-5">Any player can sub for another team during the season.</p>
            <p className="pb-5">If that team goes on to win the Epic Shots Invitational, the sub receives a cut of that team’s prize, based on how many matches they played with them.</p>
            <p className="pb-5">So the more teams you help, the more chances you have to get paid.</p>
            <h4 className="font-bold text-white mb-3">Example:</h4>
            <p className="pb-5">You’re a regular on Team A but sub for Team B twice:</p>
            <p className="pb-5">Team B wins $2,000 at the Epic Shots Invitational &rarr; you get a pro-rated share of their winnings based on your attendance with them.</p>
            <h4 className="font-bold text-white mb-3">Be the ultimate team player:</h4>
            <p className="pb-5">Show up. Play anywhere. Help teams win — and get rewarded for every night you put in the work.</p>
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
              <p><span className="font-bold">Top teams</span> advance to the <span className="font-bold">Season Epic Shots Invitational</span> for cash prizes.</p>
              <p><span className="font-bold">Individual point leaders (Top 20)</span> automatically qualify for the <span className="font-bold">Epic Shots Invitational</span>, even if their team doesn’t.</p>
            </div>
          </CardContent>
        </Card>

        {/* Invitational */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-500 flex items-center">
              The Epic Shots Invitational
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-6">
            <p>The <span className="font-bold">STK Epic Shots Invitational</span> is where the season's best earn their shot at glory &mdash; and their biggest payday of the season.</p>
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
                <p>The Epic Shots Invitational uses the <span className="font-bold">same 3-round match structure</span> as regular league play:</p>
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
              <ul className="space-y-2">
                <li className="space-y-2">&bull; <span className="text-bold">$2,000</span> &mdash; First place team</li>
                <li className="space-y-2">&bull; <span className="text-bold">$1,000</span> &mdash; First place individual</li>
                <li className="space-y-2">&bull; <span className="text-bold">$500</span> &mdash; Second place team and individual</li>
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
                <p className="font-bold">Epic Shots Invitational Win &mdash; Champion Patch</p>
                <p>This one can’t be bought. Win the Epic Shots Invitational, and you’ll wear proof that you took it all.</p>
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