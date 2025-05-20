document.addEventListener('DOMContentLoaded', function(){
    //DOM Elements
    const storiesGrid = document.getElementById('stories-grid');
    const storyView = document.getElementById('story-view');
    const backButton = document.getElementById('back-button');
    const storyTitle = document.getElementById('story-title');
    const storyContent = document.getElementById('story-content');
    const newParagraphInput = document.getElementById('new-paragraph');
    const submitParagraphBtn = document.getElementById('new-story-button');
    const newStoryModal = document.getElementById('new-story-modal');
    const closeModelBtn = document.getElementById('.close-modal');
    const createSoryBtn = document.getElementById('create-story');
    const newStoryTitleInput = document.getElementById('new-story-title');
    const newStoryFirstParagraphInput = document.getElementById('new-story-first-paragraph');

    //state
    let currentStoryId = null;

    function loadStories(){
        //load all stories from firebase
    }

    function viewStory(id, story){
        //view a single story
    }
    
    function createNewStory(title, firstParaghraph){
        //Create a new story
        if(!title || !firstParaghraph){
            alert('Please fill in all fields');
            return;
        }

        if(firstParaghraph.length < 50){
            alert('First paragraph must be at least 50 characters long');
            return;
        }

        const newStoryref = database.ref('Stories').push();
        newStoryref.set({
            title: title, 
            createAt: firebaseConfig.database.ServerValue.TIMESTAMP,
            paragraphs: {
                first: {
                    text: firstParaghraph,
                    Timestamp: firebaseConfig.dataset.ServerValue.TIMESTAMP,
                    like:0
                }
            }
        });
    }

    //Event Listners
    createStoryBtn.addEventListener('click', ()=>{
        createNewStory(newStoryTitleInput.value, newStoryFirstParagraphInput.value);
        
    })


});