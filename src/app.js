new Vue({
    el: '#app',
    data: {
        //h1
        introText: 'Type your name to begin',

        //hide by default
        isHidden: true,
        classesForMobile: ['hidden', 'warningText'],

        //no name when loading page
        name: null,

        //dark mode
        darkMode: false,
        darkModeBtnText: 'Dark mode',

        //text for mobile screens
        mobileScreen: null
    },

    //methods
    methods: {
            playSound(key){
                switch(key){
                    //numbers instead of letters to avoid sounds playing while typing in name
                    case '1':
                        const crashSound = new Audio('drumkit_images-and-sounds/sounds/crash.mp3');
                        crashSound.play();
                        break;

                    case '2':
                        const kickBassSound = new Audio('drumkit_images-and-sounds/sounds/kick-bass.mp3');
                        kickBassSound.play();
                        break;

                    case '3':
                        const snareSound = new Audio('drumkit_images-and-sounds/sounds/snare.mp3');
                        snareSound.play();
                        break;

                    case '4':
                        const tom1Sound = new Audio('drumkit_images-and-sounds/sounds/tom-1.mp3');
                        tom1Sound.play();
                        break;

                    case '5':
                        const tom2Sound = new Audio('drumkit_images-and-sounds/sounds/tom-2.mp3');
                        tom2Sound.play();
                        break;

                    case '6':
                        const tom3Sound = new Audio('drumkit_images-and-sounds/sounds/tom-3.mp3');
                        tom3Sound.play();
                        break;

                    case '7':
                        const tom4Sound = new Audio('drumkit_images-and-sounds/sounds/tom-4.mp3');
                        tom4Sound.play();
                        break;
                }
            },

            //show hidden items
            showHidden(){
                this.isHidden = false;

                //remove isHidden class from mobile text specifically, otherwise it stays
                this.classesForMobile = ['warningText']
            },
            
            //log info on keypress on input field
            logInfo(e){
                console.log(e);
            },

            //toggle theme btn text
            toggleTheme(){
                this.darkMode = !this.darkMode;

                if(this.darkModeBtnText == 'Dark mode'){
                    this.darkModeBtnText = 'Light mode';
                } else {
                    this.darkModeBtnText = 'Dark mode';
                }
            },
    },
        
        
        

        //page load
        created(){
            //document.write(screen.width);
            //text only shown on mobile
            if(screen.width < 500){
                this.mobileScreen = 'You are using a mobile device. You cannot press number but must tap the images instead.'
            }

            //keyboard events
            document.addEventListener('keypress', (e) => {
                this.playSound(e.key)
            })
    }
})