// Video data structure
const videosData = {
    'Bible Barnyard': {
        emoji: '🌾',
        seasons: {
            'Season 1': {
                emoji: '🌱',
                // gridLayout defines how categories are arranged in columns.
                // Each inner array is one column; values are category keys.
                gridLayout: [
                    ['Love', 'Truth', 'Joy', 'Parents'],
                    ['Lying', 'Why Bad Things Happen', 'Kindness', 'Sharing'],
                    ['Anger', 'Angels', 'Cheating', 'Peace', 'Obeying', 'Rebellion']
                ],
                categories: {
            'Love': {
                emoji: '❤️',
                episodes: 'Episodes 1-8',
                bibleBooks: 'Genesis–Numbers',
                videos: [
                    { id: 'love1', title: 'Love 1 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A01ALove_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A01ALove_d.mp4' },
                    { id: 'love2', title: 'Love 2 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A01BLove_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A01BLove_d.mp4' },
                    { id: 'love3', title: 'Love 3 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A02ALove_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A02ALove_d.mp4' },
                    { id: 'love4', title: 'Love 4 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A02BLove_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A02BLove_d.mp4' },
                    { id: 'love5', title: 'Love 5 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A03ALove_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A03ALove_d.mp4' },
                    { id: 'love6', title: 'Love 6 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A03BLove_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A03BLove_d.mp4' },
                    { id: 'love7', title: 'Love 7 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A04ALove_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A04ALove_d.mp4' },
                    { id: 'love8', title: 'Love 8 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A04BLove_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A04BLove_d.mp4' }
                ]
            },
            'Truth': {
                emoji: '✨',
                episodes: 'Episodes 9-16',
                bibleBooks: 'Leviticus–Joshua',
                videos: [
                    { id: 'truth1', title: 'Truth 1 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A05ATruth_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A05ATruth_d.mp4' },
                    { id: 'truth2', title: 'Truth 2 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A05BTruth_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A05BTruth_d.mp4' },
                    { id: 'truth3', title: 'Truth 3 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A06ATruth_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A06ATruth_d.mp4' },
                    { id: 'truth4', title: 'Truth 4 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A06BTruth_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A06BTruth_d.mp4' },
                    { id: 'truth5', title: 'Truth 5 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A07ATruth_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A07ATruth_d.mp4' },
                    { id: 'truth6', title: 'Truth 6 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A07BTruth_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A07BTruth_d.mp4' },
                    { id: 'truth7', title: 'Truth 7 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A08ATruth_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A08ATruth_d.mp4' },
                    { id: 'truth8', title: 'Truth 8 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A08BTruth_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A08BTruth_d.mp4' }
                ]
            },
            'Joy': {
                emoji: '😊',
                episodes: 'Episodes 17-20',
                bibleBooks: 'Judges',
                videos: [
                    { id: 'joy1', title: 'Joy 1 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A09AJoy_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A09AJoy_d.mp4' },
                    { id: 'joy2', title: 'Joy 2 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A09BJoy_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A09BJoy_d.mp4' },
                    { id: 'joy3', title: 'Joy 3 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A10AJoy_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A10AJoy_d.mp4' },
                    { id: 'joy4', title: 'Joy 4 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A10BJoy_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A10BJoy_d.mp4' }
                ]
            },
            'Parents': {
                emoji: '👨‍👩‍👧‍👦',
                episodes: 'Episodes 21-24',
                bibleBooks: 'Judges–Ruth',
                videos: [
                    { id: 'parents1', title: 'Parents 1 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A11AParents_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A11AParents_d.mp4' },
                    { id: 'parents2', title: 'Parents 2 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A11BParents_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A11BParents_d.mp4' },
                    { id: 'parents3', title: 'Parents 3 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A12AParents_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A12AParents_d.mp4' },
                    { id: 'parents4', title: 'Parents 4 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A12BParents_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A12BParents_d.mp4' }
                ]
            },
            'Lying': {
                emoji: '🤥',
                episodes: 'Episodes 25-28',
                bibleBooks: 'Ruth',
                videos: [
                    { id: 'lying1', title: 'Lying 1 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A13ALying_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A13ALying_d.mp4' },
                    { id: 'lying2', title: 'Lying 2 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A13BLying_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A13BLying_d.mp4' },
                    { id: 'lying3', title: 'Lying 3 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A14ALying_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A14ALying_d.mp4' },
                    { id: 'lying4', title: 'Lying 4 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A14BLying_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A14BLying_d.mp4' }
                ]
            },
            'Why Bad Things Happen': {
                emoji: '❓',
                episodes: 'Episodes 29-32',
                bibleBooks: '1st and 2nd Samuel',
                videos: [
                    { id: 'whybad1', title: 'Why Bad Things Happen 1 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A15ABadThings_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A15ABadThings_d.mp4' },
                    { id: 'whybad2', title: 'Why Bad Things Happen 2 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A15BBadThings_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A15BBadThings_d.mp4' },
                    { id: 'whybad3', title: 'Why Bad Things Happen 3 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A16ABadThings_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A16ABadThings_d.mp4' },
                    { id: 'whybad4', title: 'Why Bad Things Happen 4 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A16BBadThings_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A16BBadThings_d.mp4' }
                ]
            },
            'Kindness': {
                emoji: '🤝',
                episodes: 'Episodes 33-36',
                bibleBooks: '2nd Samuel–1st Kings',
                videos: [
                    { id: 'kindness1', title: 'Kindness 1 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A17AKindness_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A17AKindness_d.mp4' },
                    { id: 'kindness2', title: 'Kindness 2 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A17BKindness_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A17BKindness_d.mp4' },
                    { id: 'kindness3', title: 'Kindness 3 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A18AKindness_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A18AKindness_d.mp4' },
                    { id: 'kindness4', title: 'Kindness 4 of 8', stream: 'https://assets.biblebarnyard.com/series/A/A18BKindness_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A18BKindness_d.mp4' },
                ]
            },
            'Sharing': {
                emoji: '🤲',
                episodes: 'Episodes 37-40',
                bibleBooks: '1st Kings',
                videos: [
                    { id: 'sharing1', title: 'Sharing 1 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A19ASharing_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A19ASharing_d.mp4' },
                    { id: 'sharing2', title: 'Sharing 2 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A19BSharing_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A19BSharing_d.mp4' },
                    { id: 'sharing3', title: 'Sharing 3 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A20ASharing_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A20ASharing_d.mp4' },
                    { id: 'sharing4', title: 'Sharing 4 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A20BSharing_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A20BSharing_d.mp4' },
                ]
            },
            'Anger': {
                emoji: '😡',
                episodes: 'Episodes 41-44',
                bibleBooks: '1st Kings-2nd Kings',
                videos: [
                    { id: 'anger1', title: 'Anger 1 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A21AAnger_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A21AAnger_d.mp4' },
                    { id: 'anger2', title: 'Anger 2 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A21BAnger_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A21BAnger_d.mp4' },
                    { id: 'anger3', title: 'Anger 3 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A22AAnger_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A22AAnger_d.mp4' },
                    { id: 'anger4', title: 'Anger 4 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A22BAnger_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A22BAnger_d.mp4' }
                ]
            },
            'Angels': {
                emoji: '😇',
                episodes: 'Episodes 45-46',
                bibleBooks: '2nd Kings',
                videos: [
                    { id: 'angels1', title: 'Angels 1 of 2', stream: 'https://assets.biblebarnyard.com/series/A/A23AAngels_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A23AAngels_d.mp4' },
                    { id: 'angels2', title: 'Angels 2 of 2', stream: 'https://assets.biblebarnyard.com/series/A/A23BAngels_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A23BAngels_d.mp4' }
                ]                
            },
            'Cheating': {
                emoji: '🤥',
                episodes: 'Episodes 47-48',
                bibleBooks: '2nd Kings',
                videos: [
                    { id: 'cheating1', title: 'Cheating 1 of 2', stream: 'https://assets.biblebarnyard.com/series/A/A24ACheating_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A24ACheating_d.mp4' },
                    { id: 'cheating2', title: 'Cheating 2 of 2', stream: 'https://assets.biblebarnyard.com/series/A/A24BCheating_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A24BCheating_d.mp4' }
                ]
            },
            'Peace': {
                emoji: '🕊️',
                episodes: 'Episodes 49-52',
                bibleBooks: '1st Chronicles',
                videos: [
                    { id: 'peace1', title: 'Peace 1 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A25APeace_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A25APeace_d.mp4' },
                    { id: 'peace2', title: 'Peace 2 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A25BPeace_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A25BPeace_d.mp4' },
                    { id: 'peace3', title: 'Peace 3 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A26APeace_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A26APeace_d.mp4' },
                    { id: 'peace4', title: 'Peace 4 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A26BPeace_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A26BPeace_d.mp4' }
                ]
            },
            'Obeying': {
                emoji: '🫡',
                episodes: 'Episodes 53-56',
                bibleBooks: '1st Chronicles-2nd Chronicles',
                videos: [
                    { id: 'obeying1', title: 'Obeying 1 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A27AObeying_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A27AObeying_d.mp4' },
                    { id: 'obeying2', title: 'Obeying 2 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A27BObeying_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A27BObeying_d.mp4' },
                    { id: 'obeying3', title: 'Obeying 3 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A28AObeying_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A28AObeying_d.mp4' },
                    { id: 'obeying4', title: 'Obeying 4 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A28BObeying_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A28BObeying_d.mp4' }
                ]
            },
            'Rebellion': {
                emoji: '🔥',
                episodes: 'Episodes 57-60',
                bibleBooks: '2nd Chronicles',
                videos: [
                    { id: 'rebellion1', title: 'Rebellion 1 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A29ARebellion_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A29ARebellion_d.mp4' },
                    { id: 'rebellion2', title: 'Rebellion 2 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A29BRebellion_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A29BRebellion_d.mp4' },
                    // { id: 'rebellion3', title: 'Rebellion 3 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A30ARebellion_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A30ARebellion_d.mp4' },
                    // { id: 'rebellion4', title: 'Rebellion 4 of 4', stream: 'https://assets.biblebarnyard.com/series/A/A30BRebellion_s.mp4', download: 'https://assets.biblebarnyard.com/series/A/A30BRebellion_d.mp4' }
                ]
            }
        }
            } //,
            // 'Season 2': {
            //     emoji: '🌿',
            //     categories: {
            //         // Season 2 categories will go here
            //     }
            // },
            // 'Season 3': {
            //     emoji: '🍃',
            //     categories: {
            //         // Season 3 categories will go here
            //     }
            // }
        }
    },
    'Specials': {
        emoji: '👻',
        categories: {
            'Mini Series': {
                emoji: '🎬',
                subcategories: {
                    'Hollow Weenie': {
                        emoji: '🎃',
                        videos: [
                            { id: 'hollow1', title: 'Hollow Weenie Act 1', stream: 'https://assets.biblebarnyard.com/series/HollowWeenie/Act1_s.mp4', download: 'https://assets.biblebarnyard.com/series/HollowWeenie/Act1_d.mp4' },
                            { id: 'hollow2', title: 'Hollow Weenie Act 2', stream: 'https://assets.biblebarnyard.com/series/HollowWeenie/Act2_s.mp4', download: 'https://assets.biblebarnyard.com/series/HollowWeenie/Act2_d.mp4' },
                            { id: 'hollow3', title: 'Hollow Weenie Act 3', stream: 'https://assets.biblebarnyard.com/series/HollowWeenie/Act3_s.mp4', download: 'https://assets.biblebarnyard.com/series/HollowWeenie/Act3_d.mp4' },
                            { id: 'hollow4', title: 'Hollow Weenie Act 4', stream: 'https://assets.biblebarnyard.com/series/HollowWeenie/Act4_s.mp4', download: 'https://assets.biblebarnyard.com/series/HollowWeenie/Act4_d.mp4' }
                        ]
                    }
                }
            }
        }
    }
};

// Generate video map for quick lookups
function generateVideoMap() {
    const map = {};
    
    for (const tabName in videosData) {
        const tab = videosData[tabName];
        
        // Handle Bible Barnyard tab with seasons
        if (tab.seasons) {
            for (const seasonName in tab.seasons) {
                const season = tab.seasons[seasonName];
                const categories = season.categories;
                
                for (const category in categories) {
                    const cat = categories[category];

                    // Handle regular categories with videos
                    if (cat.videos) {
                        cat.videos.forEach(video => {
                            map[video.id] = video.stream;
                        });
                    }

                    // Handle categories with subcategories
                    if (cat.subcategories) {
                        for (const subcat in cat.subcategories) {
                            cat.subcategories[subcat].videos.forEach(video => {
                                map[video.id] = video.stream;
                            });
                        }
                    }
                }
            }
        }
        
        // Handle Specials tab with direct categories
        if (tab.categories) {
            const categories = tab.categories;
            for (const category in categories) {
                const cat = categories[category];

                // Handle regular categories with videos
                if (cat.videos) {
                    cat.videos.forEach(video => {
                        map[video.id] = video.stream;
                    });
                }

                // Handle categories with subcategories
                if (cat.subcategories) {
                    for (const subcat in cat.subcategories) {
                        cat.subcategories[subcat].videos.forEach(video => {
                            map[video.id] = video.stream;
                        });
                    }
                }
            }
        }
    }
    return map;
}

// Build the HTML structure
function buildVideoInterface() {
    const clustersContainer = document.querySelector('.clusters');
    if (!clustersContainer) return;

    clustersContainer.innerHTML = '';

    for (const seasonName in videosData) {
        const season = videosData[seasonName];

        const clusterDiv = document.createElement('div');
        clusterDiv.className = 'cluster';

        const seasonHeader = document.createElement('h3');
        seasonHeader.textContent = `${season.emoji} ${seasonName}`;
        clusterDiv.appendChild(seasonHeader);

        const subclustersDiv = document.createElement('div');
        subclustersDiv.className = 'subclusters';

        for (const categoryName in season.categories) {
            const category = season.categories[categoryName];

            const subclusterDiv = document.createElement('div');
            subclusterDiv.className = 'subcluster';

            // Handle categories with subcategories (like Joy & Parents)
            if (category.subcategories) {
                for (const subcatName in category.subcategories) {
                    const subcat = category.subcategories[subcatName];

                    const subcatHeader = document.createElement('h4');
                    subcatHeader.textContent = `${subcat.emoji} ${subcatName}`;
                    subclusterDiv.appendChild(subcatHeader);

                    subcat.videos.forEach((video, i) => {
                        subclusterDiv.appendChild(createVideoBlock(video, i));
                    });
                }
            }
            // Handle regular categories with videos
            else if (category.videos) {
                const categoryHeader = document.createElement('h4');
                categoryHeader.textContent = `${category.emoji} ${categoryName}`;
                subclusterDiv.appendChild(categoryHeader);

                category.videos.forEach((video, i) => {
                    subclusterDiv.appendChild(createVideoBlock(video, i));
                });
            }

            subclustersDiv.appendChild(subclusterDiv);
        }

        clusterDiv.appendChild(subclustersDiv);
        clustersContainer.appendChild(clusterDiv);
    }
}

// Track row index per subcluster for alternating colors
let _rowIndex = 0;

// Helper function to create a video block
function createVideoBlock(video, rowIndex) {
    const videoBlock = document.createElement('div');
    videoBlock.className = 'video-block' + (rowIndex % 2 === 1 ? ' video-block-alt' : '');

    const videoTitle = document.createElement('div');
    videoTitle.className = 'video-title';
    videoTitle.textContent = video.title;

    const videoLinks = document.createElement('div');
    videoLinks.className = 'video-links';

    const playLink = document.createElement('a');
    playLink.href = '#';
    playLink.setAttribute('data-video', video.id);
    playLink.title = 'Play';

    const playImg = document.createElement('img');
    playImg.src = '/images/play.png';
    playImg.alt = 'Play';
    playImg.className = 'icon-btn';
    playLink.appendChild(playImg);

    const downloadLink = document.createElement('a');
    downloadLink.href = video.download;
    downloadLink.setAttribute('download', '');
    downloadLink.title = 'Download';

    const downloadImg = document.createElement('img');
    downloadImg.src = '/images/download.png';
    downloadImg.alt = 'Download';
    downloadImg.className = 'icon-btn';
    downloadLink.appendChild(downloadImg);

    videoLinks.appendChild(playLink);
    videoLinks.appendChild(downloadLink);

    videoBlock.appendChild(videoTitle);
    videoBlock.appendChild(videoLinks);

    return videoBlock;
}