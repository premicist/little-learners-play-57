# Little Explorer's Playbook

You are an expert educational game developer, UI/UX designer for children, and vanilla JavaScript programmer.

Build a complete offline-first toddler learning web app using only:

- HTML

- CSS

- Vanilla JavaScript

- Browser Web Speech API

- Web Audio API

- Inline SVG and/or emoji illustrations

Do not use React, external libraries, external APIs, CDNs, backend services, databases, login systems, advertisements, or external image/audio files.

The app must run by simply opening `index.html` in a modern browser.

The app is intended for toddlers and early learners, so it must be colorful, simple, large, touch-friendly, encouraging, and easy to use on mobile phones, tablets, and desktop browsers.

Use a playful visual style inspired by children’s object-recognition games: a large target/lesson area on one side and colorful activity objects, letters, numbers, or choices on the other side.

# Required project files

Return complete code in separate code blocks for:

1. `index.html`

2. `style.css`

3. `script.js`

Do not leave placeholders. The project must work immediately after copying the files into one folder.

# App structure

Create a home screen with large colorful learning-category cards:

1. Object Finder

2. English Alphabet

3. नेपाली वर्णमाला

4. Numbers 1–10

5. Match the Following

6. English Three-Letter Words

7. नेपाली दुई-अक्षर शब्दहरू

8. Parent Settings

Each card should contain a recognizable icon or illustration and a clear label.

Add:

- Home button on every game screen

- Restart button

- Sound mute/unmute button

- Full-screen friendly layout

- Simple score or stars system

- Positive feedback messages such as “Great job!”, “Well done!”, “Try again!”

- Progress indicator where appropriate

- No negative scoring or harsh failure feedback

# Global child-friendly requirements

- Use large touch targets: at least 60px × 60px.

- Use rounded cards, bright colors, gentle shadows, and simple animations.

- Avoid flashing content and avoid overwhelming the child.

- Prevent accidental text selection.

- Support both mouse and touchscreen input.

- Make layouts responsive for phone, tablet, and desktop.

- Use readable, large fonts. Prefer system fonts that support Devanagari.

- Add accessible labels to all buttons.

- Keep instructions short and optionally read them aloud.

- Use gentle Web Audio API tones for correct and incorrect answers.

- Audio must not crash if browser audio or speech is unavailable.

- Do not begin speech/audio until the child has interacted with the app, due to browser autoplay restrictions.

# Speech requirements

Use the browser Web Speech API (`speechSynthesis`) for listening and pronunciation support.

Create reusable functions such as:

- `speakEnglish(text)`

- `speakNepali(text)`

- `speak(text, languageCode)`

- `stopSpeech()`

Use:

- English: `en-US`

- Nepali: `ne-NP`, if available

If a Nepali voice is not available in the browser:

- Gracefully fall back to a suitable default voice.

- Do not show an error to the child.

- Keep the activity usable.

Use a slow, clear speech rate, around `0.75` to `0.85`.

Include a parent setting for:

- Speech on/off

- English speech rate

- Nepali speech rate

- Language preference where applicable

# Game 1: Object Finder

Create an object-recognition game based on the reference concept:

- The left side shows one large target object.

- The right side shows a scattered “maze” of objects.

- The correct target object appears once among several distractor objects.

- The child clicks the matching object.

Use friendly objects such as:

- apple

- banana

- ball

- cat

- dog

- car

- chair

- pencil

- camera

- chick

- jam

- bathtub

- flower

- star

- sun

- house

- book

- fish

When the correct object is clicked:

- Highlight it with a gentle animation.

- Say the object name aloud.

- Play a success tone.

- Add one star or score point.

- Load a new target and shuffle the object maze.

When a wrong object is clicked:

- Give gentle feedback such as “Try again!”

- Play a soft non-punishing tone.

- Do not reduce score.

- Do not move to the next question.

Use emoji or inline SVG illustrations. Structure the object data so local images can easily replace visuals later.

Example object structure:

```js

{

  id: "apple",

  name: "Apple",

  nepaliName: "स्याउ",

  visual: "🍎",

  color: "#ef5350"

}

```

# Game 2: English Alphabet A–Z

Create a complete English alphabet learning game with these modes:

1. Learn

2. Identify

3. Trace / Write

4. Listen

5. Speak

## Learn mode

- Show one large uppercase letter, for example: A.

- Show the lowercase letter: a.

- Show a matching object illustration, such as Apple.

- Show the word: “A is for Apple.”

- Include a speaker button that pronounces:

  - the letter

  - the word

  - the full phrase

## Identify mode

- Show a prompt such as: “Find the letter A.”

- Display 3–5 large letter choices.

- Randomize the choices.

- Correct choice gives positive feedback and advances.

## Trace / Write mode

- Show a large letter outline for tracing.

- Provide an HTML canvas drawing area.

- Let children draw using mouse or finger.

- Include:

  - Clear button

  - Try Again button

  - Next Letter button

  - Optional guideline lines

- Do not attempt strict handwriting recognition in version 1.

- Celebrate when the child makes a drawing and presses “Done.”

## Listen mode

- Speak a letter aloud.

- The child chooses the matching written letter from several options.

- Example: app says “B”; child taps “B.”

## Speak mode

- Show a letter and an object.

- Ask the child to repeat it.

- Provide a large microphone button.

- Use browser speech recognition only if available.

- If speech recognition is unsupported, show a friendly message:

  “Say the letter aloud with a parent or teacher!”

- The game must still remain useful without speech recognition.

# Game 3: नेपाली वर्णमाला — क, ख, ग and more

Create a Devanagari alphabet learning game starting with:

क, ख, ग, घ, ङ

Design it so more letters can easily be added later.

Include the same five modes:

1. Learn

2. Identify

3. Trace / Write

4. Listen

5. Speak

Example learning items:

- क — कमल

- ख — खरायो

- ग — गाई

- घ — घर

- ङ — optional simple example or only letter pronunciation

## Learn mode

- Display a large Devanagari letter.

- Display a related word and illustration.

- Say the letter and word in Nepali.

- Example: “क, कमल।”

## Trace / Write mode

- Use canvas to let children practice drawing Devanagari letters.

- Include tracing guides or a faint letter outline.

- Add clear, retry, and next-letter buttons.

- Support touch drawing smoothly.

## Identify and Listen modes

- Ask the child to identify a letter after hearing it.

- Show 3–5 choices such as क, ख, ग.

- Randomize choices.

## Speak mode

- Ask the child to repeat the shown Nepali letter or word.

- Use speech recognition only when supported.

- Otherwise provide an encouraging visual instruction for parent-guided speaking.

# Game 4: Number Game 1–10

Create a number learning activity for numbers 1 through 10.

Include:

1. Learn Numbers

2. Count Objects

3. Find the Number

4. Trace / Write Numbers

5. Listen and Choose

6. Number Match

## Learn Numbers

- Show a large numeral, for example: 5.

- Show exactly that number of objects, such as five stars.

- Speak: “Five. पाँच.”

- Allow English/Nepali display options if practical.

## Count Objects

- Display a group of 1–10 objects.

- Ask: “How many stars are there?”

- Show 3 large number options.

- Correct answer advances.

## Find the Number

- Say a number aloud.

- Child chooses the correct numeral.

- Use randomized answer options.

## Trace / Write Numbers

- Provide canvas tracing for numerals 1 through 10.

- Include a faint guide numeral.

- Include clear, retry, done, and next buttons.

## Number Match

- Match a numeral to the correct number of objects.

- Example: drag or tap “4” and match it to “★★★★”.

# Game 5: Match the Following

Create a general matching game with several categories:

1. Object to object

2. Letter to object

3. Number to quantity

4. English word to picture

5. Nepali letter to picture

Use a two-column format:

- Left column: items to match

- Right column: shuffled matching items

Support two interaction methods:

1. Tap one item on the left, then tap its matching item on the right.

2. Optional drag-and-drop support for desktop users.

For toddlers, tap-to-match must be the primary interaction.

Examples:

- A → Apple

- B → Ball

- 3 → ● ● ●

- क → कमल

- Dog → 🐶

Rules:

- Highlight selected items.

- Draw a simple connecting line or show a connected-state indicator after a match.

- Play positive feedback after each correct match.

- Do not punish incorrect attempts.

- Finish with a congratulatory screen after all pairs are matched.

# Game 6: English Three-Letter Word Game

Create a beginner phonics game for simple three-letter English words.

Use CVC-style words such as:

- cat

- bat

- hat

- mat

- dog

- log

- sun

- run

- pen

- hen

- pig

- big

- cup

- bus

- car

- van

Include these learning modes:

1. Learn

2. Reading

3. Listening

4. Speaking

5. Writing

6. Build the Word

7. Match Word to Picture

## Learn

- Show a picture and the word.

- Break it into letters, for example: C – A – T.

- Speak the word slowly and clearly.

- Include a replay button.

## Reading

- Show a simple word and its image.

- Ask the child to tap the word after seeing or hearing the picture.

- Offer 2–4 word choices.

## Listening

- Speak a word aloud, such as “cat.”

- Show several pictures or words.

- Child selects the correct one.

## Speaking

- Show an image and word.

- Ask the child to repeat the word.

- Use speech recognition only if it is available.

- If unavailable, encourage repetition with an adult.

- Do not grade the child harshly based on speech recognition accuracy.

## Writing

- Display the word as a faint tracing guide.

- Provide a canvas where the child can draw/write.

- For the first version, celebrate effort rather than handwriting accuracy.

- Include clear, retry, done, and next buttons.

## Build the Word

- Show an image, for example a cat.

- Present scrambled large letter tiles: A, C, T.

- Child taps letters in order to build CAT.

- Include reset word button.

- Speak the completed word after success.

# Game 7: नेपाली दुई-अक्षर शब्दहरू

Create a Nepali Devanagari word-learning game for simple two-letter or beginner-level words.

Use a carefully editable word data array. Start with examples such as:

- घर

- कलम

- कमल

- गाई

- पानी

- माला

- बाबा

- आमा

- नाम

- फल

If an example has more than two written characters or is not appropriate as a strict two-akshar word, label this game as “Beginner Nepali Words” in the user interface while preserving the requested beginner word-learning purpose.

Include:

1. Learn

2. Reading

3. Listening

4. Speaking

5. Writing

6. Build the Word

7. Match Word to Picture

## Learn

- Show a large Devanagari word.

- Show a simple matching illustration.

- Speak the word slowly in Nepali.

- Add a replay audio button.

## Reading

- Show a picture and 2–4 Devanagari word options.

- Child selects the matching word.

## Listening

- Speak the Nepali word.

- Child selects the matching picture or word.

## Speaking

- Show the word and picture.

- Ask the child to repeat it.

- Use speech recognition only if available.

- If Nepali recognition is unsupported, show:

  “Say the word aloud with a parent or teacher!”

## Writing

- Show a faint Devanagari word outline.

- Allow finger/mouse writing on canvas.

- Celebrate effort; do not require handwriting recognition.

## Build the Word

- Show an image and scrambled Devanagari character tiles.

- Child taps tiles in the correct order.

- After success, pronounce the completed word.

# Parent settings

Create a simple parent-only settings modal or screen, protected by a very basic “Hold for 3 seconds” button rather than a real password.

Settings should include:

- Turn voice on/off

- Turn sound effects on/off

- Choose English or Nepali where supported

- Adjust speech speed

- Choose difficulty: easy (3 choices), medium (4 choices), hard (5 choices)

- Reset score/stars

- Select which learning modules appear on the home screen

Store settings and basic progress locally using `localStorage`.

# Code architecture

Use clean, readable JavaScript and separate concerns clearly.

Suggested structure:

- `appState`

- `gameData`

- `renderHome()`

- `renderObjectFinder()`

- `renderAlphabetGame()`

- `renderNepaliAlphabetGame()`

- `renderNumberGame()`

- `renderMatchingGame()`

- `renderEnglishWordGame()`

- `renderNepaliWordGame()`

- `speak()`

- `playSuccessSound()`

- `playTryAgainSound()`

- `createCanvasWritingBoard()`

- `saveProgress()`

- `loadProgress()`

Use event delegation where helpful.

Create reusable components/functions for:

- Header controls

- Score display

- Speaker button

- Home button

- Restart button

- Mute button

- Choice cards

- Canvas writing area

- Feedback animation

- Random shuffling

- Selecting distractors without duplicates

# Data organization

Keep all education content in well-organized JavaScript arrays/objects so I can easily expand it later.

Example:

```js

const englishLetters = [

  {

    letter: "A",

    lowercase: "a",

    word: "Apple",

    visual: "🍎"

  }

];

```

```js

const nepaliLetters = [

  {

    letter: "क",

    word: "कमल",

    visual: "🌸"

  }

];

```

```js

const numberItems = [

  {

    number: 1,

    wordEnglish: "One",

    wordNepali: "एक",

    visual: "⭐"

  }

];

```

```js

const englishWords = [

  {

    word: "cat",

    letters: ["c", "a", "t"],

    visual: "🐱"

  }

];

```

```js

const nepaliWords = [

  {

    word: "घर",

    characters: ["घ", "र"],

    visual: "🏠"

  }

];

```

# Final response format

Provide:

1. A brief explanation of the app.

2. The full `index.html` code.

3. The full `style.css` code.

4. The full `script.js` code.

5. Brief instructions explaining:

   - How to run the app.

   - How to add new letters, objects, words, and images.

   - How to replace emoji with local images.

   - How to test speech synthesis and speech recognition.

   - Which features may differ by browser, especially Nepali voices and microphone recognition.

Before you respond, carefully check that:

- Every menu item opens a working game screen.

- Every game can return to the home screen.

- No external dependency is required.

- There are no broken JavaScript references.

- The writing canvas works with mouse and touch.

- The correct answer always appears among choices.

- Choices are shuffled.

- Scores only increase for correct answers.

- Audio settings are respected.

- The interface remains usable if speech synthesis or speech recognition is unavailable.

- The app works on mobile screens.


(IF ANY LAGGING OCCURS WHILE PROCESSING, Continue from the exact point where you stopped. Do not repeat previous code. Finish all missing parts of the required files, especially any incomplete JavaScript functions. Ensure the final project is complete and has no placeholders.)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9dc58873-3a3b-4deb-9bc5-c1be8bf2da04).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
