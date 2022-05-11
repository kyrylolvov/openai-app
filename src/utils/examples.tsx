/* eslint-disable max-len */
import {
  faCircleQuestion,
  faGraduationCap,
  faEarthAmericas,
  faTag,
  faFaceLaugh,
  faPlaneDeparture,
  faMessage,
  faCakeCandles,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import backgroundQa from '../assets/img/backgrounds/backgroundQa.png';
import backgroundGrammar from '../assets/img/backgrounds/backgroundGrammar.png';
import backgroundTranslate from '../assets/img/backgrounds/backgroundTranslate.png';
import backgroundClassification from '../assets/img/backgrounds/backgroundClassification.png';
import backgroundEmoji from '../assets/img/backgrounds/backgroundEmoji.png';
import backgroundAirport from '../assets/img/backgrounds/backgroundAirport.png';
import backgroundChat from '../assets/img/backgrounds/backgroundChat.png';
import backgroundCake from '../assets/img/backgrounds/backgroundCake.png';
import backgroundRestaurant from '../assets/img/backgrounds/backgroundRestaurant.png';

const examples = [
  {
    title: 'Questions and Answers',
    paragraph: "Answer questions based on AI's knowledge.",
    background: backgroundQa,
    icon: faCircleQuestion,
    example: 'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is the capital of Canada?\nA: Ottawa\n\nQ: When was Shopify founded?\nA: 2006\n\nQ: Which color is banana?',
  },
  {
    title: 'Grammar correction',
    paragraph: 'Corrects sentences into standard English.',
    background: backgroundGrammar,
    icon: faGraduationCap,
    example: 'Correct this to standard English:\n\nHe no ate banana',
  },
  {
    title: 'English to other languages',
    paragraph: 'Translates English into other languages',
    background: backgroundTranslate,
    icon: faEarthAmericas,
    example: 'Translate this into French\n\nHe didn\'t eat a banana',
  },
  {
    title: 'Classification',
    paragraph: 'Classify items into categories via example.',
    background: backgroundClassification,
    icon: faTag,
    example: 'The following is a list of companies and the categories they fall into:\n\nApple, Facebook, Shopify\n\nApple\nCategory:',
  },
  {
    title: 'Movie to Emoji',
    paragraph: 'Convert movie titles into emoji.',
    background: backgroundEmoji,
    icon: faFaceLaugh,
    example: 'Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \nJurassic Park:',
  },
  {
    title: 'Airport code extractor',
    paragraph: 'A simple prompt for extracting airport codes.',
    background: backgroundAirport,
    icon: faPlaneDeparture,
    example: 'Extract the airport codes from this text:\n\nText: "I want to fly from Los Angeles to Miami."\nAirport codes: LAX, MIA\n\nText: "I want to fly from Odessa to Toronto"\nAirport codes:',
  },
  {
    title: 'Friend chat',
    paragraph: 'Emulate a text message conversation.',
    background: backgroundChat,
    icon: faMessage,
    example: 'You: What have you been up to?\nFriend: Playing video games.\nYou: Did you play anything interesting?\nFriend:',
  },
  {
    title: 'Recipe creator',
    paragraph: 'Create a recipe from ingredients (risky!)',
    background: backgroundCake,
    icon: faCakeCandles,
    example: 'Write a recipe based on these ingredients and instructions:\n\nPancakes\n\nIngredients:\nFlour\nBaking powder\nSalt\nSugar\nMilk\nEgg\nButter\n\nInstructions:',
  },
  {
    title: 'Restaurant review creator',
    paragraph: 'Turn a few words into a restaurant review.',
    background: backgroundRestaurant,
    icon: faUtensils,
    example: 'Write a restaurant review based on these notes:\n\nName: Rolltation\nPoke Bowl great, quite, service polite, prices good.\n\nReview:',
  },
];

export default examples;
