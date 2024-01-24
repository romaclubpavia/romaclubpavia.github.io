console.log('work');

const socialLink = [
    { iconCls: 'fa fa-fb', uri: 'https://enterhere' },
    { iconCls: 'fa fa-in', uri: 'https://enterhere' },
    { iconCls: 'fa fa-tw', uri: 'https://enterhere' },
    { iconCls: 'fa fa-yt', uri: 'https://enterhere' },
];

const langs = [
 { isoCode: 'en-US', label: 'English', shortLabel: 'EN' },
 { isoCode: 'it-IT', label: 'Italiano', shortLabel: 'IT' },
 { isoCode: 'rm-RM', label: 'Romano', shortLabel: 'RM' },
];

let options = {
    darkMode: true,
    langCode: 'it-IT'
};

const LabelManager = {
    
    getLabel: function(code) {
        const res = 'Missing label ' + code;
        const language = labels[options.langCode.replace('-', '')];
        if (! language ){
            return res;
        }
        const label = language[code];
        return (label ? label : res);
    }
}

const HomeManager = {

    initialize: function(){
        var cmLanguage = document.getElementById('cmLanguage');
        for(var i = 0; i < langs.length; i++){
          const lang = langs[i];
          let option = document.createElement('option');
          option.value = lang.isoCode;
          option.text = lang.shortLabel;
          if (lang.isoCode == options.langCode) {
              option.setAttribute('selected','');
          }
      
          cmLanguage.appendChild(option);
        }
        
        HomeManager.changeLanguage(options.langCode);
        cmLanguage.addEventListener('change', function() { HomeManager.changeLanguage(this.value); }, false);
    },

    changeLanguage: function(newLanguage) {
        options.langCode = newLanguage;
        HomeManager.labelUpdate();
    },

    labelUpdate: function() {
        document.getElementById('dvTitle').innerText = LabelManager.getLabel('headerTitle');
        document.getElementById('lbContactUs').innerText = LabelManager.getLabel('contactUs');
        document.getElementById('sFollowUs').innerText = LabelManager.getLabel('followUs');
    }
}



const labels = { 
    enUS: { contactUs: 'Contact us', followUs: 'Follow us', headerTitle: 'ROMA CLUB PAVIA' },
    itIT: { contactUs: 'Contattaci', followUs: 'Seguici',   headerTitle: 'ROMA CLUB PAVIA' },
    rmRM: { contactUs: 'Contattace', followUs: 'Seguice',   headerTitle: 'ROMA CLUB PAVIA' }, 
} 
;

const displayHeader = function() {

}

const displayBody = function(){

}

const displayFooter = function(){

}

const main = function(){
    HomeManager.initialize();
}

window.onload = main();