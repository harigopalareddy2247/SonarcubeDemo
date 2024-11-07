const { I } = inject()

module.exports = {
    async clickLinkByText(text) {
        await I.wait(10)
        I.click(locate('#homepage-links').withText(text))
        console.log(text)
    },

    async selectGender(gender) {
        let male='#male'
        let female='#female'
        if (gender === 'Male')
            I.click(male)
        else if (gender === 'Female')
            I.click(female)
    },

    async fillForm(details) {

        let random=Math.floor(Math.random() * 100) + 1;
        let email=details[0]+random
        let fname=details[0]
        let lname=details[0]
        let password=details[0]+random
        let cPassword=details[0]+random

        I.fillField('div[id=email] input', email)
        I.fillField('div[id=fname] input', fname)
        I.fillField('div[id=lname] input', lname)
        I.fillField('div[id=password] input', password)
        I.fillField('div[id=cPassword] input', cPassword)

        return random
    },
} 
