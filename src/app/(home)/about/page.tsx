import Image from 'next/image';
import React from 'react';

const items = [
	'Connect your Solana wallet',
	'Create an account if it is your first time playing',
	'Place a $15 bet for the current Gameweek',
	'Make sure to place bet before the Gameweek starts',
	'Monies from participants goes into a single pool',
	'Wait for the Gameweek to end',
	'Upon ending prove your score in the dApp',
	'After the Gameweek settles first three users by point divide the pot',
	'Pot is distributed 70% to first, 25% to second and 5% to third',
	'Winners get payout in USDC',
	'Repeat!',
];

const rules = [
	'Any user that is currently cheating in the regular FPL game is also cheating on DGNTASY, and thus disqualifiable.',
	"Disqualified users won't be able to win any ongoing Gameweek, and they will be banned for the rest of the Season.",
	'Payout is determined based on the total pot of the Gameweek minus the service fee.',
	'The Payout is distributed among the top three players of the current Gameweek.',
	'Payouts are distributed as follow: 1st placement gets 70% of the pot. 2nd placement gets 25% of the pot. Third placement gets 5% of the pot.',
	'If one or more players tie the payout is shared equally among them.',
	'The team settles Gameweek results and payouts.',
	'Bets are placed in USDC and are payed out back to winners in USDC.',
];

const About = () => {
	return (
		<>
			<div className="min-h-screen w-full flex justify-center items- pt-[80px]">
				<div className="w-9/12 flex flex-col">
					{/* <div className="w-full flex justify-center items-center">
            <Image
              src="/aboutimage.webp"
              alt="about"
              width={800}
              height={800}
            />
          </div> */}

					<div className="flex flex-col gap-4 py-8">
						<p className="font-extrabold text-primary text-center text-2xl text-theme">
							DGNTASY IS WHERE YOU BET ON FANTASYPREMIERLEAGUE.COM
						</p>
						<div className="flex flex-col lg:flex-row justify-between items-center bg-white p-6 rounded shadow-2xl gap-12">
							<div className="w-full flex justify-center items-center">
								<Image
									src="/aboutimage.webp"
									alt="about"
									width={800}
									height={800}
								/>
							</div>
							<div>
								<h1 className="text-4xl font-extrabold text-center">
									RULES
								</h1>
								<ol className="list-decimal list-inside">
									{rules.map((rule, index) => (
										<li
											key={index}
											className="text-lg py-2 text-theme"
										>
											{rule}
										</li>
									))}
								</ol>
							</div>
						</div>

						<div className="flex items-center justify-center">
							<div className="relative flex flex-col gap-8 items-start justify-center border-l-4 border-blue-500 mt-12">
								<p className="text-blue-500 font-extrabold text-6xl pl-4">
									How to play
								</p>
								<div>
									{items.map((rule, index) => (
										<div
											key={index}
											className="mb-10 ml-6 flex items-center justify-start"
										>
											<div className="absolute -left-4.5 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
												{index + 1}
											</div>

											<div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-200">
												<p className="text-theme font-medium">
													{rule}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* <div className="flex justify-between items-center bg-white p-6 rounded shadow-2xl gap-12">
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/aboutimage.webp"
                  alt="about"
                  width={800}
                  height={800}
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-center">Rules</h1>
                <ol className="list-decimal list-inside ">
                  {items.map((item, index) => (
                    <li key={index} className="text-lg py-2 text-gray-700">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div> */}

						{/* <p className="font-semibold text-base text-theme">
              The Premier League is the organising body of the Premier League
              with responsibility for the competition, its Rule Book and the
              centralised broadcast and other commercial rights.
            </p>

            <p className="text-base py-5">
              However, we do not operate in isolation. We work proactively and
              constructively with our Member Clubs and the other football
              authorities to improve the quality of football, both in England
              and across the world.
            </p>

            <p className="font-semibold text-theme">
              The Member Clubs of the Premier League
            </p>
            <p className="flex flex-col gap-4 pt-5">
              <span>
                The Premier League is a private company wholly owned by its 20
                Member Clubs who make up the League at any one time.
              </span>
              <span>
                Each individual club is independent, working within the rules of
                football, as defined by the Premier League, The FA, UEFA and
                FIFA, as well as being subject to English and European law.
              </span>
              <span>
                Each of the 20 clubs are a Shareholder in the Premier League.
                Consultation is at the heart of the Premier League and
                Shareholder meetings are the ultimate decision-making forum for
                Premier League policy and are held at regular intervals during
                the course of the season.
              </span>
              <span>
                The Premier League AGM takes place at the close of each season,
                at which time the relegated clubs transfer their shares to the
                clubs promoted into the Premier League from the Football League
                Championship.
              </span>
              <span>
                Clubs have the opportunity to propose new rules or amendments at
                the Shareholder meeting. Each Member Club is entitled to one
                vote and all rule changes and major commercial contracts require
                the support of at least a two-thirds vote, or 14 clubs, to be
                agreed.
              </span>
              <span>
                The Premier League Rule Book, contained within the Handbook
                (Download: Premier League Handbook; PDF 18.2MB), serves as a
                contract between the League, the Member Clubs and one another,
                defining the structure and running of the competition.
              </span>
              <span>
                Any serious breach of the Rule Book results in an independent
                three-person tribunal sitting to hear the case, ascertain guilt
                and set the punishment, which can range from fines to points
                deductions and, in extreme cases, expulsion from the competition
                (this has never happened in the history of the Premier League).
              </span>
              <span>
                At the Premier League's AGM in June 2022, an Owners' Charter was
                agreed by Clubs. The Owners and Directors of the Member Clubs
                are custodians of those organisations and will uphold the spirit
                of the Charter's commitments.
              </span>
            </p>
            <p className="font-semibold text-theme py-4">
              Premier League UK workforce
            </p>
            <p className="flex flex-col gap-4">
              <span>
                The Premier League head office is based in central London. The
                organisation has a staff of 191 people who deliver across a
                range of roles including football, coach development, community,
                youth development, safeguarding, broadcast, commercial,
                communications, digital, finance, legal, marketing and policy.
              </span>
              <span>
                The Premier League’s current UK workforce includes 16.2 per cent
                Black, Asian, minority ethnic representation and we are
                committed to delivering equality, diversity and inclusion across
                the organisation. We are currently in the process of achieving
                the EY National Equality Standard and therefore our activities
                and polices are independently assessed.
              </span>
            </p> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
