class Assessment {
    
    constructor(comment_text,valuation_number,date_created){
        this.comment_text = comment_text;
        this.valuation_number = valuation_number;
        this.date_created = date_created;
    }

    change_comment(new_comment){
        this.comment_text = new_comment;
    }
}


module.exports = Assessment;
