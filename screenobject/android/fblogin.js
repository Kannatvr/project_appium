class Login {
    get launchChrome() {
        return $('~Chrome');
    }
    get Textfild(){
        return $('//*[@resource-id="com.android.chrome:id/search_box_text"]')
    }
}

export default new Login();
