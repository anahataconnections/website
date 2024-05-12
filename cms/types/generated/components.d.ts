import type { Schema, Attribute } from '@strapi/strapi';

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

export interface WebsiteBusinessPartner extends Schema.Component {
  collectionName: 'components_website_business_partners';
  info: {
    displayName: 'Business_Partner';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    description: Attribute.Text;
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

export interface WebsiteOurCommunity extends Schema.Component {
  collectionName: 'components_website_our_communities';
  info: {
    displayName: 'Our_Community';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
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
  };
  attributes: {
    content: Attribute.Blocks;
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
      'application.question-screen': ApplicationQuestionScreen;
      'application.question': ApplicationQuestion;
      'website.advertisements': WebsiteAdvertisements;
      'website.any-plans': WebsiteAnyPlans;
      'website.business-partner': WebsiteBusinessPartner;
      'website.collaboration': WebsiteCollaboration;
      'website.faq': WebsiteFaq;
      'website.founder-words': WebsiteFounderWords;
      'website.home-blog': WebsiteHomeBlog;
      'website.our-community': WebsiteOurCommunity;
      'website.testimonial': WebsiteTestimonial;
      'website.why-anahata-connections': WebsiteWhyAnahataConnections;
      'website.why-choose-us': WebsiteWhyChooseUs;
      'website.yoga': WebsiteYoga;
    }
  }
}
