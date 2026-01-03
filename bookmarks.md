# Saturday, January 3, 2026

## @adocomplete - Sandbox Mode Security Pattern with Boundaries
> Advent of Claude Day 27 - Sandbox Mode
>
> "Can I run npm install?" [Allow]
> "Can I run npm test?" [Allow]
> "Can I cat this file?" [Allow]
> ×100
>
> /sandbox → boundaries set → Claude gets to work.
>
> Define boundaries once. Claude works freely inside them.
>
> YOLO speed. Actual security.

- **Tweet:** https://x.com/adocomplete/status/2004977723429847380
- **Tags:** [[Coding]]
- **What:** Describes a sandbox pattern for Claude where users define security boundaries once, then Claude can work freely within them - combining speed with actual security controls.

---

## @karpathy - Using Claude Code to Control Lutron Home Automation System
> *Quoting @cyp_ll:* claude figured out how to control my oven
>
> I was inspired by this so I wanted to see if Claude Code can get into my Lutron home automation system.
>
> - it found my Lutron controllers on the local wifi network
> - checked for open ports, connected, got some metadata and identified the devices and their firmware
> - searched the internet, found the pdf for my system
> - instructed me on what button to press to pair and get the certificates
> - it connected to the system and found all the home devices (lights, shades, HVAC temperature control, motion sensors etc.)
> - it turned on and off my kitchen lights to check that things are working (lol!)
>
> I am now vibe coding the home automation master command center, the potential is 🔥.And I'm throwing away the crappy, janky, slow Lutron iOS app I've been using so far. Insanely fun :D :D

- **Tweet:** https://x.com/karpathy/status/2005067301511630926
- **Quoted:** https://x.com/cyp_ll/status/2002506706622767573
- **Tags:** [[Coding]]
- **What:** Andrej Karpathy demonstrates Claude Code integrating with and controlling a Lutron home automation system - discovering devices, finding documentation, setting up certificates, and controlling lights without needing the official app.

---

## @bcherny - Claude Code Growth: 259 PRs and 497 Commits in 30 Days
> When I created Claude Code as a side project back in September 2024, I had no idea it would grow to be what it is today. It is humbling to see how Claude Code has become a core dev tool for so many engineers, how enthusiastic the community is, and how people are using it for all sorts of things from coding, to devops, to research, to non-technical use cases. This technology is alien and magical, and it makes it so much easier for people to build and create. Increasingly, code is no longer the bottleneck.
>
> A year ago, Claude struggled to generate bash commands without escaping issues. It worked for seconds or minutes at a time. We saw early signs that it may become broadly useful for coding one day.
>
> Fast forward to today. In the last thirty days, I landed 259 PRs -- 497 commits, 40k lines added, 38k lines removed. Every single line was written by Claude Code + Opus 4.5. Claude consistently runs for minutes, hours, and days at a time (using Stop hooks). Software engineering is changing, and we are entering a new period in coding history. And we're still just getting started..

- **Tweet:** https://x.com/bcherny/status/2004887829252317325
- **Tags:** [[Coding]]
- **What:** Boris Cherny reflects on Claude Code's evolution from a September 2024 side project to a core development tool, noting 259 PRs and 497 commits in 30 days with every line written by Claude Code + Opus 4.5, demonstrating how code is no longer the bottleneck.

---

## @esrtweet - 50 Years of Programming: From Punched Cards to AI Coding Assistants
> I was writing some code the new-school way yesterday, prompting gpt-4.1 through aider, and for whatever reason my mind flashed back 50 years and the utter freaking enormity of it all crashed in on me like a tidal wave.
>
> And now I want to make you feel that, too.
>
> In 1975 I ran programs by feeding punched cards into a programmable calculator. Actual computers were still giant creatures that lived in glass-walled rooms, though there were rumors from afar of a thing called an Altair.
>
> Unix and C had not yet broken containment from Bell Lab; DOS and the first IBM PC were six years away. The aggregated digital computing capacity of the entire planet was roughly equivalent to a single modern smartphone. We still used Teletypes as production gear because even video character terminals barely existed yet; pixel-addressable color displays on computers were a science-fiction dream.
>
> We didn't have version control. Public forge sites wouldn't be a thing for 25 years yet. The number of computer games that existed in the world could probably be counted on the fingers of two hands.
>
> Because of all this, I learned to program over the next ten years with tools so primitive that when I talk about them today it sounds like uphill-both-ways sketch comedy.
>
> You may not even be able to imagine what a slow and laborious process programming was then, and how tiny the volume of code we could produce per month was; I have to work to remember it, myself.
>
> Today I call spirits from the vasty deep, conversing with unhuman intelligences and belting out finished programs I would once have considered prohibitively complex to attempt within a single working day.
>
> Fifty years, many generations of hardware technology, from punched cards to AIs that can pass the Turing test...and I'm still here, still coding, still on top of what a software engineer needs to know to get useful work done in the current day. Gotta admit I feel some pride in that!
>
> This meditation isn't supposed to be about me, though. It's about the dizzying, almost unbelievable progress I've lived through and been a part of. If you had told me to predict when I would have a device in my pocket that would give me instant real-time access to most of the world's knowledge, with my own pet homunculi to sift through it for me, I would have been one of the few that wouldn't have said "never" (because I was already a science-fiction fan), but I wouldn't have predicted a date fewer than multiple centuries in the future either.
>
> We've come a hell of a long way, baby. And the fastest part of the ride is only beginning. The Singularity is upon us. Everything I've lived through and learned was just prologue.

- **Tweet:** https://x.com/esrtweet/status/2004829013068444050
- **Tags:** [[Coding]]
- **What:** Eric S. Raymond reflects on 50 years of programming evolution from punched cards in 1975 to modern AI coding assistants, contrasting the primitive tools of the past with the current ability to have AIs write complex programs in a single day.

---

## @BeLikeBumblebee - gh-dash - Rich Terminal UI for GitHub
> *Replying to @steipete:* I think have you tried dash it is gh cli plugin but super intuitive

- **Tweet:** https://x.com/BeLikeBumblebee/status/2004215481948045561
- **Filed:** [gh-dash](./knowledge/tools/gh-dash.md)
- **What:** gh-dash is a rich terminal UI for GitHub that provides an intuitive interface for managing PRs and issues without breaking your workflow - implements a TUI using Bubbletea with vim-style keybindings and customizable actions.

---

# Friday, December 26, 2025

## @karpathy - Programmer skill issue in AI era

> I've never felt this much behind as a programmer. The profession is being dramatically refactored as the bits contributed by the programmer are increasingly sparse and between. I have a sense that I could be 10X more powerful if I just properly string together what has become available over the last ~year and a failure to claim the boost feels decidedly like skill issue. There's a new programmable layer of abstraction to master (in addition to the usual layers below) involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills, hooks, MCP, LSP, slash commands, workflows, IDE integrations, and a need to build an all-encompassing mental model for strengths and pitfalls of fundamentally stochastic, fallible, unintelligible and changing entities suddenly intermingled with what used to be good old fashioned engineering. Clearly some powerful alien tool was handed around except it comes with no manual and everyone has to figure out how to hold it and operate it, while the resulting magnitude 9 earthquake is rocking the profession. Roll up your sleeves to not fall behind.

- **Tweet:** https://x.com/karpathy/status/2004607146781278521
- **Tags:** [[AI]]
- **What:** Andrej Karpathy reflects on the paradigm shift in programming as AI tooling evolves, highlighting the need to master new layers of abstraction and AI-enabled workflow patterns to stay relevant.

---

# Thursday, December 25, 2025

## @vkhosla - Mindset shift for AI founders

> *Quoting @DBVolkov:* Andrej Karpathy literally dropped the mindset shift every AI founder needs to hear https://t.co/LScl0NEjMH

- **Tweet:** https://x.com/vkhosla/status/2004321834645528889
- **Quoted:** https://x.com/DBVolkov/status/2003873361508946414
- **Tags:** [[AI]]
- **What:** Vinod Khosla endorses Karpathy's insights on the mindset shift required for AI founders in the current era of AI-augmented development.

---

# Wednesday, December 24, 2025

## @tom_doerr - Obsidian + Claude Code PKM Starter Kit

> Personal knowledge management system with AI agents and hooks
>
> https://t.co/dCOIZDhhXr https://t.co/WaFsofrXeh

- **Tweet:** https://x.com/tom_doerr/status/2003739364082303441
- **Filed:** [obsidian-claude-pkm](./knowledge/tools/obsidian-claude-pkm.md)
- **Tags:** [[AI]]
- **What:** Complete personal knowledge management system combining Obsidian with Claude Code, featuring AI-powered hooks, custom agents, and modular rules for vault automation.

---

# Tuesday, December 23, 2025

## @JayaGup10 - AI's trillion-dollar opportunity

> AI's trillion-dollar opportunity: Context graphs

- **Tweet:** https://x.com/JayaGup10/status/2003525933534179480
- **Tags:** [[AI]]
- **What:** Insight about context graphs as a major economic opportunity in the AI space.

---

# Monday, February 24, 2025

## @karpathy - Agency > Intelligence

> Agency > Intelligence
>
> I had this intuitively wrong for decades, I think due to a pervasive cultural veneration of intelligence, various entertainment/media, obsession with IQ etc. Agency is significantly more powerful and significantly more scarce. Are you hiring for agency? Are we educating for agency? Are you acting as if you had 10X agency?
>
> Grok explanation is ~close:
>
> "Agency, as a personality trait, refers to an individual's capacity to take initiative, make decisions, and exert control over their actions and environment. It's about being proactive rather than reactive—someone with high agency doesn't just let life happen to them; they shape it. Think of it as a blend of self-efficacy, determination, and a sense of ownership over one's path.
>
> People with strong agency tend to set goals and pursue them with confidence, even in the face of obstacles. They're the type to say, "I'll figure it out," and then actually do it. On the flip side, someone low in agency might feel more like a passenger in their own life, waiting for external forces—like luck, other people, or circumstances—to dictate what happens next.
>
> It's not quite the same as assertiveness or ambition, though it can overlap. Agency is quieter, more internal—it's the belief that you *can* act, paired with the will to follow through. Psychologists often tie it to concepts like locus of control: high-agency folks lean toward an internal locus, feeling they steer their fate, while low-agency folks might lean external, seeing life as something that happens *to* them."
>
> *Quoting @garrytan:* Intelligence is on tap now so agency is even more important

- **Tweet:** https://x.com/karpathy/status/1894099637218545984
- **Quoted:** https://x.com/garrytan/status/1894063324582625732
- **Tags:** [[AI]]
- **What:** Karpathy argues that agency is more valuable than intelligence in the modern era where intelligence is commoditized. He defines agency as the capacity to take initiative and shape one's environment, contrasting it with mere intelligence.

---

# Tuesday, December 30, 2025

## @khoomeik - Jensen's 2027 Announcement on NVIDIA Kyber Architecture
> none of you are ready for what jensen is dropping in 2027.
>
> we are so early.
>
> *Quoting @Midnight_Captl:* $NVDA - Kyber NVL576 racks will require ~5x more power than Blackwell NVL 72 racks (which required 3x more power than H100 racks). Sidecar system designed with Schneider Electric for power conversion and delivery...

- **Tweet:** https://x.com/khoomeik/status/2006073125172351154
- **Quoted:** https://x.com/Midnight_Captl/status/2005431398254145993
- **Tags:** [[AI]]
- **What:** Commentary on Jensen Huang's upcoming 2027 announcement about NVIDIA's next-generation Kyber architecture, with analysis of power density scaling and system innovations.

---

## @venturetwins - Incredible Claude Subreddit Activity
> Incredible things happening in the Claude subreddit.

- **Tweet:** https://x.com/venturetwins/status/2006178752544530441
- **Tags:** [[Coding]]
- **What:** Commentary on active development and discussion happening in the Claude community subreddit.

---

# Monday, December 29, 2025

## @stockthoughts81 - Situational Awareness: AI Progress and Implications
> Impossible to read the first 3 pages and not want to read the other 162
>
> "Before long, the world will wake up. But right now, there are perhaps a few hundred people, most of them in San Francisco and the AI labs, that have situational awareness."
>
> SO GOOD

- **Tweet:** https://x.com/stockthoughts81/status/2005446963970343399
- **Link:** https://situational-awareness.ai/wp-content/uploads/2024/06/situationalawareness.pdf
- **Tags:** [[AI]]
- **What:** Sharing of the "Situational Awareness" PDF, a comprehensive analysis of AI progress and its implications, emphasizing that only a few hundred people understand the scale of AI development.

---

# Sunday, December 28, 2025

## @demishassabis - The Thinking Game Documentary Milestone
> 'The Thinking Game' documentary has just passed 200M views on YouTube in just 4 weeks!
>
> Perfect holiday viewing if you're interested in a behind-the-scenes look at how an AGI lab works, or what goes into making a Nobel Prize winning project like AlphaFold happen.

- **Tweet:** https://x.com/demishassabis/status/2005358757203845592
- **Tags:** [[AI]]
- **What:** Announcement of "The Thinking Game" documentary reaching 200 million views in 4 weeks, featuring behind-the-scenes look at DeepMind's AGI research and AlphaFold development.

---

## @Scobleizer - World Models and AI Acceleration
> Translation: we are about to accelerate because of AI breakthroughs like world models.
>
> *Quoting @benitoz:* The Memory Wars: Why the Future Karpathy, Musk, and Jim Fan See Requires 16-Hi HBM

- **Tweet:** https://x.com/Scobleizer/status/2005424249134264427
- **Quoted:** https://x.com/benitoz/status/2005349615823183897
- **Tags:** [[AI]]
- **What:** Commentary on how world models and related AI breakthroughs represent an inflection point for exponential acceleration in AI capabilities and system performance.

---

## @trq212 - Spec-Based Claude Code Development
> my favorite way to use Claude Code to build large features is spec based
>
> start with a minimal spec or prompt and ask Claude to interview you using the AskUserQuestionTool
>
> then make a new session to execute the spec

- **Tweet:** https://x.com/trq212/status/2005315275026260309
- **Tags:** [[Coding]]
- **What:** Best practice for using Claude Code: start with minimal specs and let Claude interview you to clarify requirements before implementation.

---

## @Yuchenj_UW - Side Projects as Compounding Innovation
> Claude Code was a side project at Anthropic.
> ChatGPT was a side project at OpenAI.
> PyTorch was a side project at Meta.
> Gmail was a side project at Google.
>
> Side projects are the only place where taste, curiosity, and agency fully compound.

- **Tweet:** https://x.com/Yuchenj_UW/status/2005361471224746368
- **What:** Observation about how major innovations (Claude Code, ChatGPT, PyTorch, Gmail) originated as side projects with the freedom for creativity and agency.

---

# Friday, December 26, 2025

## @srishticodes - Stanford's Free $200K AI Degree and Course Materials
> Stanford just made a $200,000 AI degree free.
>
> No application. No tuition. No "elite access".
>
> Stanford released its actual AI/ML curriculum on YouTube.
> Not a PR-friendly intro.
> Not "AI for the public".
>
> This is the real thing.
> The same lectures shaping people working on frontier models.
>
> **Deep Learning (CS230)**
> **Transformers & LLMs (CME295)**
> **Language Models from Scratch (CS336)**
> **ML from Human Feedback (CS329H)**
> **Computer Vision (CS231N)**
> **LLM Evaluation & Scaling**
>
> The uncomfortable truth: The degree isn't the scarce asset anymore. Execution speed is.

- **Tweet:** https://x.com/srishticodes/status/2004583963952865389
- **Tags:** [[AI]] [[Education]]
- **What:** Stanford released its complete, world-class AI/ML curriculum publicly on YouTube, including courses like Transformers & LLMs, Language Models from Scratch, Computer Vision, and more—democratizing access to frontier AI education.

---

# Thursday, November 27, 2025

## @Scobleizer - MindAptiv GPU Optimization Breakthrough: Major Efficiency Gains

> After five days this still has less than 100 likes.
>
> MAJOR breakthrough. No one is paying attention.
>
> And people think that the hyperscalers will forever be not profitable?
>
> This uses 99% less energy. 20-60x faster performance.
>
> Will affect all AI workloads.
>
> Now do you get how AI will run on shitty edge devices like phones, watches, glasses?
>
> The breakthroughs are here, just not evenly distributed yet.
>
> *Quoting @Ken_Granville:* Breakthrough in GPU optimization — independently validated. MindAptiv has created a new class of compute — not AI, not CUDA tuning — a new way to generate machine instructions with extreme speed, precision, and energy efficiency.

- **Tweet:** https://x.com/Scobleizer/status/1993938549150761080
- **Quoted:** https://x.com/Ken_Granville/status/1991248764003094595
- **Tags:** [[AI]]
- **What:** Quote tweet highlighting a major breakthrough in GPU optimization from MindAptiv - achieving 99% energy reduction and 20-60x performance improvements in compute.

---

# Wednesday, November 19, 2025

## @Ken_Granville - Breakthrough in GPU Optimization: New Class of Compute

> Breakthrough in GPU optimization — independently validated.
>
> MindAptiv has created a new class of compute — not AI, not CUDA tuning — a new way to generate machine instructions with extreme speed, precision, and energy efficiency.
>
> Verified by an AWS-selected Premier Partner:
>
> - 20×–60× faster performance
> - Up to 99% less energy (Beyond our expectations!)
> - Runs on standard hyperscaler GPU instances
> - Real-time optimization no team of engineers could match

- **Tweet:** https://x.com/Ken_Granville/status/1991248764003094595
- **Tags:** [[AI]]
- **What:** Announcement of MindAptiv's breakthrough in GPU optimization technology offering 20-60x faster performance with 99% less energy consumption across compute-intensive applications.

---

# Tuesday, November 18, 2025

## @karpathy - On Gemini 3 and Model Generalization Quirks

> *Replying to @karpathy:* I had a positive early impression yesterday across personality, writing, vibe coding, humor, etc., very solid daily driver potential, clearly a tier 1 LLM. My most amusing interaction was where the model (I think I was given some earlier version with a stale system prompt) refused to believe me that it is 2025 and kept inventing reasons why I must be trying to trick it or playing some elaborate joke on it. I kept giving it images and articles from "the future" and it kept insisting it was all fake. It accused me of using generative AI to defeat its challenges. I then realized later that I forgot to turn on the "Google Search" tool. Turning that on, the model searched the internet and had a shocking realization that I must have been right all along. It's in these unintended moments where you can best get a sense of model smell.

- **Tweet:** https://x.com/karpathy/status/1990855382756164013
- **Parent:** https://x.com/karpathy/status/1990854771058913347
- **Tags:** [[AI]]
- **What:** Andrej Karpathy's reflections on Gemini 3 model capabilities and a humorous anecdote about a model that refused to believe the current year was 2025, highlighting interesting edge cases in model generalization.

---

# Thursday, November 13, 2025

## @Almondgodd - Android Dreams: 20-Year Robotics Predictions

> I spent the past year building AI for robots at Tesla Optimus and Dyna
>
> Now I'm introducing ANDROID DREAMS: an essay of my predictions for the next 20 years of robotics, inspired by Situational Awareness and AI2027.
>
> I predict EGI by 2031 and more robots than humans by 2045

- **Tweet:** https://x.com/Almondgodd/status/1989079135235473550
- **Tags:** [[AI]]
- **What:** Essay on robotics predictions for the next 20 years, based on experience building AI for Tesla Optimus and Dyna, predicting embodied general intelligence by 2031 and robot population exceeding humans by 2045.

---

# Wednesday, November 12, 2025

## @DFinsterwalder - Neural Network Visualization with Three.js and PyTorch

> I vibecoded this neural network visualization for my students and open sourced it.
>
> It shows a simple MLP trained on MNIST handwritten digits at several training steps. The visualization is using @threejs and it comes with training code in @PyTorch.

- **Tweet:** https://x.com/DFinsterwalder/status/1988724242310132056
- **Tags:** [[AI]]
- **What:** Open-source neural network visualization tool showing a multi-layer perceptron training on MNIST digits using Three.js for visualization and PyTorch for the training code.

---

# Thursday, July 31, 2025

## @GoogleDesign - Google Sans Code Font
> Meet Google Sans Code — the new font meticulously crafted for coders, made by @Google! It blends geometric precision with a touch of calligraphic flair in a fixed-width design that's super easy to read, even at tiny code editor sizes. Say goodbye to squinting and hello to clear, beautiful code! ✨

- **Tweet:** https://x.com/GoogleDesign/status/1950966219592605730
- **Tags:** [[Coding]]
- **What:** Google announces Google Sans Code, a new monospace font designed specifically for code editors with focus on readability at small sizes.

---

# Wednesday, July 9, 2025

## @Scobleizer - Apple Vision Pro Hardware Advancement
> I hear the next Apple Vision Pro is still heavy and expensive, but has a way faster chip, with a lot better hardware for running AI workloads, which makes it way better positioned for the Holodeck that I keep talking about. That said, this isn't glasses, and it isn't the "iPhone moment" for the Holodeck.
>
> *Quoting @DeItaone:* *APPLE READYING VISION PRO WITH NEW CHIP, MORE COMFORTABLE STRAP *APPLE IS PLANNING LIGHTER, REDESIGNED HEADSET MODEL FOR 2027

- **Tweet:** https://x.com/Scobleizer/status/1942997611352592480
- **Quoted:** https://x.com/DeItaone/status/1942994997499891920
- **What:** Analysis of next-generation Apple Vision Pro improvements focusing on faster AI-capable chip and hardware advancements for immersive computing.

---

# Sunday, July 6, 2025

## @jack - bitchat: Bluetooth Mesh Chat
> my weekend project to learn about bluetooth mesh networks, relays and store and forward models, message encryption models, and a few other things.
>
> bitchat: bluetooth mesh chat...IRC vibes.
>
> TestFlight: https://t.co/P5zRRX0TB3
> GitHub: https://t.co/Yphb3Izm0P https://t.co/yxZxiMfMH2

- **Tweet:** https://x.com/jack/status/1941989435962212728
- **Tags:** [[Coding]]
- **Filed:** [bitchat](./knowledge/tools/bitchat.md)
- **What:** A decentralized peer-to-peer messaging app combining Bluetooth mesh for offline communication with Nostr protocol for global internet-based reach, emphasizing privacy and no-account design.

---

# Saturday, July 5, 2025

## @karpathy - Building Open Source Communities Like Bacteria
> How to build a thriving open source community by writing code like bacteria do 🦠. Bacterial code (genomes) are:
>
> - small (each line of code costs energy)
> - modular (organized into groups of swappable operons)
> - self-contained (easily "copy paste-able" via horizontal gene transfer)
>
> If chunks of code are small, modular, self-contained and trivial to copy-and-paste, the community can thrive via horizontal gene transfer. For any function (gene) or class (operon) that you write: can you imagine someone going "yoink" without knowing the rest of your code or having to import anything new, to gain a benefit? Could your code be a trending GitHub gist?
>
> This coding style guide has allowed bacteria to colonize every ecological nook from cold to hot to acidic or alkaline in the depths of the Earth and the vacuum of space, along with an insane diversity of carbon anabolism, energy metabolism, etc. It excels at rapid prototyping but... it can't build complex life. By comparison, the eukaryotic genome is a significantly larger, more complex, organized and coupled monorepo. Significantly less inventive but necessary for complex life - for building entire organs and coordinating their activity. With our advantage of intelligent design, it should possible to take advantage of both. Build a eukaryotic monorepo backbone if you have to, but maximize bacterial DNA.

- **Tweet:** https://x.com/karpathy/status/1941616674094170287
- **Tags:** [[Coding]]
- **What:** Philosophy on open-source code design comparing bacterial genomes (small, modular, copy-paste-able) to eukaryotic genomes (complex, coupled), advocating for balancing both approaches.

---

# Wednesday, February 12, 2025

## @karpathy - Smuggling arbitrary data through an emoji
> UTF-8 🤦‍♂️
>
> I already knew about the "confusables", e.g.: e vs. е. Which look ~same but are different.
>
> But you can also smuggle arbitrary byte streams in any character via "variation selectors". So this emoji: 😀​​​​​​​​​​​​​​​​​​​​​​ is 53 tokens. Yay

- **Tweet:** https://x.com/karpathy/status/1889714240878940659
- **Filed:** [Smuggling arbitrary data through an emoji](./knowledge/articles/smuggling-data-emoji.md)
- **What:** Technical deep-dive on using Unicode variation selectors to encode arbitrary data invisibly within Unicode characters and emojis.

---

# Friday, November 28, 2025

## @_avichawla - Strix AI Pentesting Framework
> Pentesting firms don't want you to see this.
>
> An open-source AI agent just replicated their $50k service.
>
> A "normal" pentest today looks like this:
>
> - $20k-$50k per engagement
> - 4-6 weeks of scoping, NDAs, kickoff calls
> - A big PDF that's outdated the moment you ship a new feature
>
> Meanwhile, AI agents are quietly starting to perform on-par with human pentester on the stuff that actually matters day-to-day:
>
> ⤳ Enumerating attack surface
> ⤳ Fuzzing endpoints
> ⤳ Chaining simple vulns into real impact
> ⤳ Producing PoCs and remediation steps developers can actually use
>
> And they do it in hours instead of weeks and at a fraction of the cost.
>
> This approach is actually implemented in Strix, a recently-trending open-source framework (14k+ stars) for AI pentesting agent.
>
> The framework spins up a team of AI "attackers" that probe your web apps, APIs, and code.
>
> It then returns validated findings with exploit evidence, remediation steps, and a full PDF report that looks exactly like what you'd get from a traditional firm, but without a $50k invoice and a month-long wait time.
>
> You can see the full implementation on GitHub and try it yourself.
>
> Just run: `strix --target https://your-app.com` and you are good to go.
>
> Human red teams aren't disappearing but the routine pentest (pre-launch, post-refactor, quarterly checks) is clearly shifting to AI.
>
> Strix is one of the first tools that makes that shift feel real instead of hypothetical.
>
> I've shared the GitHub repo in the replies.

- **Tweet:** https://x.com/_avichawla/status/1994305031974342832
- **Tags:** [[Coding]]
- **What:** Open-source AI pentesting framework that automates security testing and vulnerability discovery at a fraction of traditional pentester costs. Demonstrates practical application of AI agents for security automation.

---

# Wednesday, October 1, 2025

## @DannyHabibs - 3D Viewer with Head Tracking
> *Replying to @DannyHabibs:* Why this matters: most 3D on phones collapses to a flat video. Asking viewers to drag the camera fights lean-back behavior. Window Mode adds presence without new habits.
>
> Try it in your browser: https://lab.true3d.com/targets
>
> (Works on phones and laptop webcams too.)

- **Tweet:** https://x.com/DannyHabibs/status/1973418124314828961
- **Parent:** https://x.com/DannyHabibs/status/1973418122578370592
- **Tags:** [[Coding]]
- **What:** Interactive 3D viewer demo with head tracking via webcam. Shows how to implement presence and spatial awareness in web-based 3D content without requiring dragging gestures.

---

# Tuesday, September 16, 2025

## @iannuttall - Codex CLI Pro Tip
> Codex CLI pro tip
>
> Add this updated function to bashrc/zshrc & run cdx instead of codex to get:
>
> - cdx update to update codex
> - gpt-5 codex model
> - web search enabled
> - full auto mode (read, edit, run commands)
> - summaries of model thinking
>
> (function in image alt text)

- **Tweet:** https://x.com/iannuttall/status/1967902687078519225
- **Tags:** [[Coding]]
- **What:** Shell function enhancement for Codex CLI that enables automatic updates, GPT-5 model access, web search, full automation mode, and thinking summaries via a simplified `cdx` command.

---

# Saturday, September 6, 2025

## @jjanezhang - AI Coding Tools Creating Code Cruft
> It's been about a year since my team has fully adopted all the AI coding tools (Cursor, Claude Code)
>
> And day to day I am feeling the added cruft in the code base. Unit tests are not catching regressions. Unneeded mocking, comments, are left in between. More refactoring is needed to add new features.
>
> I find myself sitting down and rewriting files to ensure completeness, correctness, and ease for future developers more than I ever have before.

- **Tweet:** https://x.com/jjanezhang/status/1964206805523058949
- **Tags:** [[Coding]]
- **What:** Insight on code quality challenges after year-long adoption of AI coding tools. Highlights need for additional refactoring and maintenance effort to manage technical debt and ensure test coverage.

## @samhenrigold - MacBook Hinge Sensor Hack
> Did you know your MacBook has a sensor that knows the exact angle of the screen hinge?
>
> It's not exposed as a public API, but I figured out a way to read it and make it sound like an old wooden door.

- **Tweet:** https://x.com/samhenrigold/status/1964428927159382261
- **Tags:** [[Coding]]
- **What:** Creative hardware hack demonstrating how to access undocumented MacBook hardware sensors (screen hinge angle sensor) and use them for creative projects without public API access.

---

# Wednesday, December 31, 2025

## @dabit3 - OpenForm: 100x Cheaper Typeform Clone
> Something I wanted to see if Claude Opus 4.5 could do: clone a fully functional Billion $ SAAS product and make it at least 100x cheaper.
>
> The first product that came to mind was TypeForm because it's very popular, very expensive, and in theory, very simple.
>
> The result is OpenForm: a polished + functional and Open Source Typeform clone at ~100x less cost, that can be setup and deployed in ~15 minutes. The agent building this ran for ~35 minutes.
>
> Here are the details, technique, and the code:

- **Tweet:** https://x.com/dabit3/status/2006489676924989860
- **Tags:** [[Coding]]
- **What:** Demonstration of Claude Opus 4.5's capabilities in building a fully functional form builder clone (OpenForm) that's 100x cheaper than TypeForm, built and deployed in 35 minutes.

---

## @dejavucoder - Claude Code Adoption Phases
> there are two types of people in this world -
> 1. who started using claude code before karpathy sensei
> 2. who started using claude code after karpathy sensei

- **Tweet:** https://x.com/dejavucoder/status/2006289006758350924
- **Tags:** [[Coding]]
- **What:** Humorous observation about the cultural impact of Claude Code, marking it as a watershed moment in the AI/coding community.

---

# Tuesday, December 30, 2025

## @venturetwins - Incredible Claude Subreddit Activity
> Incredible things happening in the Claude subreddit.

- **Tweet:** https://x.com/venturetwins/status/2006178752544530441
- **Tags:** [[Coding]]
- **What:** Commentary on active development and discussion happening in the Claude community subreddit.

---

# Sunday, December 28, 2025

## @trq212 - Spec-Based Claude Code Development
> my favorite way to use Claude Code to build large features is spec based
>
> start with a minimal spec or prompt and ask Claude to interview you using the AskUserQuestionTool
>
> then make a new session to execute the spec

- **Tweet:** https://x.com/trq212/status/2005315275026260309
- **Tags:** [[Coding]]
- **What:** Best practice for using Claude Code: start with minimal specs and let Claude interview you to clarify requirements before implementation.

---

## @Yuchenj_UW - Side Projects as Compounding Innovation
> Claude Code was a side project at Anthropic.
> ChatGPT was a side project at OpenAI.
> PyTorch was a side project at Meta.
> Gmail was a side project at Google.
>
> Side projects are the only place where taste, curiosity, and agency fully compound.

- **Tweet:** https://x.com/Yuchenj_UW/status/2005361471224746368
- **What:** Observation about how major innovations (Claude Code, ChatGPT, PyTorch, Gmail) originated as side projects with the freedom for creativity and agency.

---

# Monday, December 22, 2025

## @ivanhzhao - Steam, Steel, and Infinite Minds
> Steam, Steel, and Infinite Minds

- **Tweet:** https://x.com/ivanhzhao/status/2003192654545539400
- **Tags:** [[AI]]
- **What:** A philosophical reflection on the intersection of history, technology, and consciousness.

---

# Friday, December 19, 2025

## @Altimor - Anthropic as the Apple of AI
> Anthropic is going to be the Apple of AI: the smaller, more luxury player, universally and rightfully beloved by the more sophisticated users

- **Tweet:** https://x.com/Altimor/status/2002133511055311206
- **Tags:** [[AI]]
- **What:** Insightful comparison positioning Anthropic as a premium AI player focused on sophisticated users and quality over scale.

---

## @karpathy - 2025 LLM Year in Review
> 2025 LLM Year in Review

- **Tweet:** https://x.com/karpathy/status/2002118205729562949
- **Tags:** [[AI]]
- **What:** Andrej Karpathy's retrospective on major LLM developments and trends throughout 2025.

---

# Friday, December 12, 2025

## @simonw - OpenAI Adopts Skills Mechanism
> OpenAI aren't talking about it yet, but it turns out they've adopted Anthropic's brilliant "skills" mechanism in a big way
>
> Skills are now live in both ChatGPT and their Codex CLI tool, I wrote up some detailed notes on how they work so far here: https://t.co/eWcaA3PTKp

- **Tweet:** https://x.com/simonw/status/1999623295046664294
- **Link:** https://simonwillison.net/2025/Dec/12/openai-skills/
- **Tags:** [[AI]]
- **Filed:** [OpenAI Adopts Anthropic Skills Mechanism](./knowledge/articles/openai-skills.md)
- **What:** Simon Willison documents how OpenAI has quietly adopted Anthropic's skills mechanism in ChatGPT and Codex CLI, demonstrating cross-platform adoption of this innovative feature.

---

# Sunday, December 7, 2025

## @lennysan - Surge AI: From 100 People to 1B Revenue
> The fastest company in history to $1B did it with no VC money and fewer than 100 people.
>
> @HelloSurgeAI has become the secret weapon behind Anthropic and Google's best models. Founder Edwin Chen (@echen) built it without playing the Silicon Valley game—no viral posts, no fundraising treadmill.

- **Tweet:** https://x.com/lennysan/status/1997781716036125126
- **Podcast:** https://open.spotify.com/episode/7JBDnz8nqN305VkGcxUeZL
- **Tags:** [[AI]]
- **Filed:** [Surge AI: How a 100-Person Lab Became the Secret Weapon for Anthropic & Google](./knowledge/podcasts/surge-ai-edwin-chen.md)
- **What:** Lenny Rachitsky interviews Edwin Chen, founder of Surge AI, about how the company achieved $1B revenue bootstrapped with <100 people, discussing Claude's capabilities, AI training methodology, and AGI timelines.

---

# Monday, September 29, 2025

## @mikeyk - Claude.ai Clone Attempt
> We asked every version of Claude to make a clone of Claude(dot)ai, including today's Sonnet 4.5… see what happened in the video https://t.co/fq0UnGNHhj

- **Tweet:** https://x.com/mikeyk/status/1972718726052286637
- **Tags:** [[AI]]
- **What:** Experiment testing different Claude versions' ability to clone the Claude.ai interface, with results shown in accompanying video.

---

## @IntuitMachine - AI's Effect on Wages and Opportunity Judgment
> Everyone "knows" that as AI gets better, humans become less valuable. Except three economists just proved the exact opposite using math from 1973 and Steve Jobs. And it explains something that's been driving researchers crazy...

- **Tweet:** https://x.com/IntuitMachine/status/1972626981196911072
- **Tags:** [[AI]]
- **What:** Deep analysis of economic research showing AI amplifies human value through opportunity judgment rather than replacing workers, with counterintuitive U-shaped inequality curves.

---

# Sunday, September 28, 2025

## @gregisenberg - Accenture Layoffs as AGI Disruption Signal
> It's begun

- **Tweet:** https://x.com/gregisenberg/status/1972305086102843710
- **Quoted:** https://x.com/Investingcom/status/1972250466718474635
- **Tags:** [[AI]]
- **What:** Quote tweet commentary on Accenture's announcement of 11,000 layoffs due to AI, framing it as the beginning of broader AI-driven workforce disruption.

---

# Friday, September 26, 2025

## @IntuitMachine - AGI Economics: "We Won't Be Missed" Paper
> Everyone 'knows' AGI will either make us all unemployed or fabulously wealthy. Except, a rather brilliant (and chilling) paper from a Yale economist suggests it's neither. It says the economy will boom, and our wages... won't.

- **Tweet:** https://x.com/IntuitMachine/status/1971725636851912914
- **Tags:** [[AI]]
- **What:** Analysis of "We Won't Be Missed" paper arguing that under AGI, economic growth continues but labor's share of income collapses toward zero, reframing the future of work.

---

# Thursday, September 25, 2025

## @Scobleizer - FactoryAI: State of the Art Software Engineering
> How hot is this company? Go to X's search. Type "FactoryAI" and search. Look at just how much praise from developers this company is getting. The team at @FactoryAI goes deep with me today right after they launched a ton of new stuff for developers.

- **Tweet:** https://x.com/Scobleizer/status/1971373288929755495
- **Tags:** [[AI]]
- **What:** Endorsement and deep-dive interview with FactoryAI co-founder about their developer-focused AI software engineering tools, covering security and product demos.

---

---

# Wednesday, December 24, 2025

## @pepicrft - Mole: macOS Deep Clean Tool

> I came across this very cool tool to clean up your macOS environment: https://t.co/z1AS3gWXF8
>
> It consolidates features from CleanMyMac, AppCleaner, DaisyDisk, and iStat. Open source and gratis!

- **Tweet:** https://x.com/pepicrft/status/2003772976718581923
- **Filed:** [Mole](./knowledge/tools/mole.md)
- **What:** Open source macOS cleaning and optimization tool that unifies features from multiple premium tools. Handles deep cleaning, app uninstallation, disk analysis, and system monitoring.

## @mitchellh - Ghostty 1.0: Year One Anniversary Features

> Ghostty 1.0 came out a year ago today. Since then:
>
> - Command Palette
> - Background Images
> - Quick Terminal Size
> - Graphical Progress Bars (OSC 9;4)
> - Undo/Redo Close (macOS)
> - Terminal Bell (audio, graphical, and more)
> - Custom Cursor Shaders - animations/trails
> - SSH Improvements - auto terminfo copying, env fixes
> - Quick Terminal on Linux
> - Global Keybinds on Linux
> - Server-Side Decorations (SSD) on Linux
> - Performable Keybindings
> - Bitmap Font Support
> - Alpha Blending on both macOS and Linux
> - Apple Shortcuts Integration (macOS)
> - GTK rewrite with native GObject
>
> Coming in 1.3, already in nightly/tip:
>
> - Scrollback Search
> - Scrollbars
> - Key Tables / Chained Keybinds
> - Copy as HTML/RTF
> - libghostty started and already shipping in 3rd party production code on all platforms including web
>
> Commits: 5,154
> Unique contributors: 310

- **Tweet:** https://x.com/mitchellh/status/2003942978600013877
- **What:** Announcement of Ghostty 1.0's first anniversary with comprehensive feature review. Highlights major additions like vim-mode support, Linux improvements, and upcoming features in 1.3. Notable open-source success with 5,154 commits and 310 contributors.

---

# Tuesday, December 23, 2025

## @mitchellh - Ghostty Vim Mode Implementation

> Here's a short video (4m) that goes into more detail on how "vim mode" works in Ghostty and the multitude of features that are composed together to make it all work. This showcases how powerful Ghostty's keybinding system is getting!
>
> And don't worry, I plan on shipping a built-in "vim mode" table (unbound by default) so you can bind an opinionated "vim mode" with a single line in your config. But, if you want to modify it in any way, that's completely possible because this all works via standard config.

- **Tweet:** https://x.com/mitchellh/status/2003560220786926046
- **What:** Technical deep-dive on Ghostty's vim mode implementation, showcasing the composability of its keybinding system. Demonstrates how users can bind built-in vim mode or customize it entirely through configuration.

## @VicVijayakumar - Claude Opus 4.5 Improving Old Code

> I vibe coded some absolute slop 6 months ago when I built a feature, and Opus 4.5 is now cleaning it up. Maybe this is the answer to all the slop out there; newer models clean up the work of the older models.

- **Tweet:** https://x.com/VicVijayakumar/status/2003663532793978966
- **What:** Observation about using Claude Opus 4.5 to refactor and improve hastily-written code from six months prior. Commentary on generational improvement of AI models cleaning up technical debt.

---

# Friday, December 19, 2025

## @ennycodes - Vibe Coding Requires Real Knowledge

> You need real coding knowledge to vibe-code properly. https://t.co/2LRrFaaDeT

- **Tweet:** https://x.com/ennycodes/status/2001949930538328248
- **What:** Brief take on vibe coding culture, asserting that it still requires foundational coding knowledge despite the casual approach.

---

# Saturday, November 8, 2025

## @bengold - Physical Intelligence: AI for Robotics and General-Purpose Robots

> One of the best startup websites I've seen in a while https://t.co/V6zSRrwBnm

- **Tweet:** https://x.com/bengold/status/1987278164679139676
- **Link:** https://www.pi.website/
- **Tags:** [[AI]]
- **Filed:** [Physical Intelligence](./knowledge/articles/physical-intelligence.md)
- **What:** Company website for Physical Intelligence, a robotics and AI startup focused on bringing foundation models and learning algorithms to physical robots and actuated devices. Well-designed site showcasing their latest research on vision-language-action (VLA) models.

---

# Wednesday, November 5, 2025

## @SGRodriques - Kosmos: AI Scientist for Automated Scientific Research Discovery

> Today, we're announcing Kosmos, our newest AI Scientist, available to use now. Users estimate Kosmos does 6 months of work in a single day. One run can read 1,500 papers and write 42,000 lines of code. At least 79% of its findings are reproducible. Kosmos has made 7 discoveries so far, which we are releasing today, in areas ranging from neuroscience to material science and clinical genetics...

- **Tweet:** https://x.com/SGRodriques/status/1986086198004072772
- **Tags:** [[AI]]
- **What:** Announcement of Kosmos, an AI-powered research agent from FutureHouse that can process massive amounts of scientific literature and code to make research discoveries. Includes 7 validated discoveries in neuroscience, materials science, and clinical genetics.

---

# Wednesday, October 29, 2025

## @Scobleizer - Cognitive Architectures: 20-Year-Old's AI System Beats Major Models

> How did a 20-year-old beat Grok. And ChatGPT. And Perplexity. And Gemini? In part one @blevlabs laid out how: he built a very different architecture to take AI to a new human level. Cognitive architectures, he calls them. I call them AI's with consciousness. Ones that learn, evolve, build themselves, and do so like we do.

> *Quoting @Scobleizer:* Every once in a while I meet someone who comes out of nowhere to bring a real breakthrough. @blevlabs is the latest that I've found. His AI is way more advanced than any I've seen that are publicly available.

- **Tweet:** https://x.com/Scobleizer/status/1983645577067036733
- **Quoted:** https://x.com/Scobleizer/status/1983251942089658823
- **Tags:** [[AI]]
- **What:** Two-part interview with @blevlabs about cognitive architectures - a novel AI architecture approach that reportedly outperforms major AI models and demonstrates continuous learning capabilities.

---

# Tuesday, October 28, 2025

## @heyalexfriedman - How to Get ChatGPT to Stop Agreeing with Everything

> How to get ChatGPT to stop agreeing with everything you say: https://t.co/IQvApUdFtc

> *Quoting @heyalexfriedman:* @JamesonCamp Go to your settings and tell it "You are an expert who double checks things, you are skeptical and you do research. I am not always right. Neither are you, but we both strive for accuracy." That's the only way I've gotten it to tell me I'm wrong lol

- **Tweet:** https://x.com/heyalexfriedman/status/1983256768525279330
- **Tags:** [[AI]]
- **What:** Quick tip for improving ChatGPT interactions by setting a system prompt that encourages the model to be skeptical and fact-check rather than uncritically agree with the user.

---

# Friday, October 24, 2025

## @karpathy - nanochat: Training Small LLMs with Spelling Tasks

> Last night I taught nanochat d32 how to count 'r' in strawberry (or similar variations). I thought this would be a good/fun example of how to add capabilities to nanochat and I wrote up a full guide here: https://t.co/fz1AMI5kqk

- **Tweet:** https://x.com/karpathy/status/1981746327995465816
- **Link:** https://github.com/karpathy/nanochat
- **Tags:** [[AI]] [[Coding]]
- **Filed:** [nanochat](./knowledge/tools/nanochat.md)
- **What:** Andrej Karpathy's minimal ChatGPT implementation for training small language models on consumer hardware (~$100). Includes detailed guide on adding capabilities like spelling tasks through synthetic data and fine-tuning techniques.
