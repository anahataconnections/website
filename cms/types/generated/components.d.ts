import type { Schema, Attribute } from '@strapi/strapi';

export interface ApplicationEducation extends Schema.Component {
  collectionName: 'components_application_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    education_list: Attribute.JSON;
  };
}

export interface ApplicationInterestsList extends Schema.Component {
  collectionName: 'components_application_interests_lists';
  info: {
    displayName: 'Interests list';
    description: '';
  };
  attributes: {
    interests_list: Attribute.JSON;
  };
}

export interface ApplicationLanguage extends Schema.Component {
  collectionName: 'components_application_languages';
  info: {
    displayName: 'Language';
  };
  attributes: {
    language_list: Attribute.JSON;
  };
}

export interface ApplicationLookingFor extends Schema.Component {
  collectionName: 'components_application_looking_fors';
  info: {
    displayName: 'Looking for';
  };
  attributes: {
    looking_for_list: Attribute.JSON;
  };
}

export interface ApplicationOptions extends Schema.Component {
  collectionName: 'components_application_options';
  info: {
    displayName: 'options';
  };
  attributes: {
    option: Attribute.Text;
  };
}

export interface ApplicationPaymentBasic extends Schema.Component {
  collectionName: 'components_application_payment_basics';
  info: {
    displayName: 'payment_basic';
  };
  attributes: {
    name: Attribute.String;
    amount: Attribute.String;
    features: Attribute.Component<'application.options', true>;
  };
}

export interface ApplicationProfessions extends Schema.Component {
  collectionName: 'components_application_professions';
  info: {
    displayName: 'Professions';
  };
  attributes: {
    professions_list: Attribute.JSON;
  };
}

export interface ApplicationProfilePopup extends Schema.Component {
  collectionName: 'components_application_profile_popups';
  info: {
    displayName: 'Profile-popup';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Blocks;
  };
}

export interface ApplicationQuestionScreen extends Schema.Component {
  collectionName: 'components_application_question_screens';
  info: {
    displayName: 'Question_Screen';
  };
  attributes: {
    questions: Attribute.Component<'application.question', true>;
  };
}

export interface ApplicationQuestion extends Schema.Component {
  collectionName: 'components_application_questions';
  info: {
    displayName: 'Question';
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    type: Attribute.Enumeration<
      ['single_choice_correct', 'multiple_choice_correct', 'text']
    >;
    option_1: Attribute.String;
    option_2: Attribute.String;
    option_3: Attribute.String;
    option_4: Attribute.String;
    others: Attribute.Boolean;
  };
}

export interface ApplicationQuestionn extends Schema.Component {
  collectionName: 'components_application_questionns';
  info: {
    displayName: 'Questionn';
  };
  attributes: {
    Question: Attribute.String;
    type: Attribute.Enumeration<
      ['single_choice_correct', 'multiple_choice_correct', 'text']
    >;
    options: Attribute.Component<'application.options', true>;
  };
}

export interface ApplicationReligion extends Schema.Component {
  collectionName: 'components_application_religions';
  info: {
    displayName: 'Religion';
  };
  attributes: {
    religion_list: Attribute.JSON;
  };
}

export interface ApplicationVerifyPopUp extends Schema.Component {
  collectionName: 'components_application_verify_pop_ups';
  info: {
    displayName: 'verify_pop_up';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Blocks;
  };
}

export interface ApplicationWorkout extends Schema.Component {
  collectionName: 'components_application_workouts';
  info: {
    displayName: 'Workout';
  };
  attributes: {
    workout_list: Attribute.JSON;
  };
}

export interface WebsiteAboutFounder extends Schema.Component {
  collectionName: 'components_website_about_founders';
  info: {
    displayName: 'About_founder';
  };
  attributes: {
    founder_name: Attribute.String;
    subline: Attribute.String;
    founder_image: Attribute.Media;
  };
}

export interface WebsiteAdvertisements extends Schema.Component {
  collectionName: 'components_website_advertisements';
  info: {
    displayName: 'Advertisements';
  };
  attributes: {
    image: Attribute.Media;
    content: Attribute.Blocks;
  };
}

export interface WebsiteAnyPlans extends Schema.Component {
  collectionName: 'components_website_any_plans';
  info: {
    displayName: 'Any_Plans';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface WebsiteBannerImage extends Schema.Component {
  collectionName: 'components_website_banner_images';
  info: {
    displayName: 'Banner Image';
  };
  attributes: {
    bannerImage: Attribute.Media;
  };
}

export interface WebsiteBusinessPartner extends Schema.Component {
  collectionName: 'components_website_business_partners';
  info: {
    displayName: 'Business_Partner';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    description: Attribute.Text;
    rating: Attribute.Integer;
    country: Attribute.String;
  };
}

export interface WebsiteChat extends Schema.Component {
  collectionName: 'components_website_chats';
  info: {
    displayName: 'chat';
  };
  attributes: {
    text1: Attribute.String;
    text2: Attribute.String;
    text3: Attribute.String;
    text4: Attribute.String;
  };
}

export interface WebsiteCollaboration extends Schema.Component {
  collectionName: 'components_website_collaborations';
  info: {
    displayName: 'Collaboration';
  };
  attributes: {
    image: Attribute.Media;
    content: Attribute.Blocks;
  };
}

export interface WebsiteFaq extends Schema.Component {
  collectionName: 'components_website_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface WebsiteFounderWords extends Schema.Component {
  collectionName: 'components_website_founder_words';
  info: {
    displayName: 'Founder_words';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface WebsiteHomeBlog extends Schema.Component {
  collectionName: 'components_website_home_blogs';
  info: {
    displayName: 'Home_Blog';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    blogs: Attribute.Relation<
      'website.home-blog',
      'oneToMany',
      'api::blog.blog'
    >;
  };
}

export interface WebsiteImages extends Schema.Component {
  collectionName: 'components_website_images';
  info: {
    displayName: 'Images';
  };
  attributes: {
    banner_image: Attribute.Media;
  };
}

export interface WebsiteOurCommunity extends Schema.Component {
  collectionName: 'components_website_our_communities';
  info: {
    displayName: 'Our_Community';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
    text1: Attribute.String;
    text2: Attribute.String;
    text3: Attribute.String;
    text4: Attribute.String;
  };
}

export interface WebsiteTestimonial extends Schema.Component {
  collectionName: 'components_website_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
    image: Attribute.Media;
    name: Attribute.String;
  };
}

export interface WebsiteWhatIsAnahataChakra extends Schema.Component {
  collectionName: 'components_website_what_is_anahata_chakras';
  info: {
    displayName: 'What_is_Anahata_Chakra';
  };
  attributes: {
    Heading_title: Attribute.String;
    date: Attribute.Date;
    image: Attribute.Media;
    subtitle: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface WebsiteWhyAnahataConnections extends Schema.Component {
  collectionName: 'components_website_why_anahata_connections';
  info: {
    displayName: 'Why_Anahata_Connections';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface WebsiteWhyChooseUs extends Schema.Component {
  collectionName: 'components_website_why_choose_uses';
  info: {
    displayName: 'Why_choose_us';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
    image: Attribute.Media;
  };
}

export interface WebsiteYoga extends Schema.Component {
  collectionName: 'components_website_yogas';
  info: {
    displayName: 'Yoga';
  };
  attributes: {
    image: Attribute.Media;
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'application.education': ApplicationEducation;
      'application.interests-list': ApplicationInterestsList;
      'application.language': ApplicationLanguage;
      'application.looking-for': ApplicationLookingFor;
      'application.options': ApplicationOptions;
      'application.payment-basic': ApplicationPaymentBasic;
      'application.professions': ApplicationProfessions;
      'application.profile-popup': ApplicationProfilePopup;
      'application.question-screen': ApplicationQuestionScreen;
      'application.question': ApplicationQuestion;
      'application.questionn': ApplicationQuestionn;
      'application.religion': ApplicationReligion;
      'application.verify-pop-up': ApplicationVerifyPopUp;
      'application.workout': ApplicationWorkout;
      'website.about-founder': WebsiteAboutFounder;
      'website.advertisements': WebsiteAdvertisements;
      'website.any-plans': WebsiteAnyPlans;
      'website.banner-image': WebsiteBannerImage;
      'website.business-partner': WebsiteBusinessPartner;
      'website.chat': WebsiteChat;
      'website.collaboration': WebsiteCollaboration;
      'website.faq': WebsiteFaq;
      'website.founder-words': WebsiteFounderWords;
      'website.home-blog': WebsiteHomeBlog;
      'website.images': WebsiteImages;
      'website.our-community': WebsiteOurCommunity;
      'website.testimonial': WebsiteTestimonial;
      'website.what-is-anahata-chakra': WebsiteWhatIsAnahataChakra;
      'website.why-anahata-connections': WebsiteWhyAnahataConnections;
      'website.why-choose-us': WebsiteWhyChooseUs;
      'website.yoga': WebsiteYoga;
    }
  }
}
