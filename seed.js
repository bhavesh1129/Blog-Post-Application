const Post = require('./models/post');

const posts = [{
        title: 'Lifehack',
        author: 'Bhavesh',
        description: 'In order to reach your life’s goals, you need to be efficient and follow the straightest line. Lifehack will help you for that. The site is dedicated to lifehacks, i.e., any advice, resource, tip or trick that will help you get things done more efficiently and effectively. The blog is authored by several lifehack experts who will help you improve all the aspects of your life, including lifestyle, money, health, relationships, work and technology.'
    },

    {
        title: 'Michael Hyatt',
        author: 'Aman',
        description: 'To achieve your goals, you have to learn leadership, particularly self-leadership. Michael Hyatt’s personal blog will help you influence yourself as well as other people. Here, you will find articles, podcasts and interviews about leadership, personal development, productivity and other topics that will help you achieve your personal, professional and business goals.'
    },

    {
        title: 'The Positivity Blog',
        author: 'Piyush',
        description: 'Negativity, self-doubts and fear are hindrances to one’s journey to personal success. If you want to create more happiness and look at your life in a more positive way, then The Positivity Blog is for you. The blog was founded by Henrik Edberg of Sweden. Since 2006, he has already written practical tips, newsletters and created courses about simplifying life, getting rid of stress, and improving social skills, self-esteem, happiness and awesomeness.'
    },

    {
        title: 'Live Bold and Bloom',
        author: 'ABC',
        description: 'You have to live boldly and bloom wildly to chase your dreams and achieve your goals. That’s what Barrie Davenport, creator of Live Bold and Bloom, wants to inspire you to do. The site publishes practical and realistic strategies that will push you out of your comfort zone and help you uncover your passion, build self-confidence, learn new habits, and have healthy and happy relationships with the people you love the most. What a program!'
    },

    {
        title: 'Pick the Brain',
        author: 'XYZ',
        description: 'Pick the Brain is a self-help blog dedicated to self-improvement with a focus on personal productivity, motivation, self education, psychology and philosophy (that should be broad enough!). The site is not your traditional “self-help” blog, as it takes a broader approach and covers anything that is related to making the lives of people more prosperous. So if you want to read unconventional posts and tips about growing yourself and achieving your goals, don’t forget Pick the Brain to include in your list.'
    }
];

const seedDB = async() => {
    await Post.deleteMany({});

    await Post.insertMany(posts);
    console.log('DB Seeded')
}

module.exports = seedDB;