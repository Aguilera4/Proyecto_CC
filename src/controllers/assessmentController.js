var assessment = require('../models/assessment');


class AssessmentController {

    constructor(){
        this.assessment = {};
    }

    createAssessment(id_owner_comment,id_recipient_user,comment_text,valuation_number,date_created){
        
        if(!(id_recipient_user in this.assessment)){
            var new_assessment = new assessment(comment_text,valuation_number,date_created);
            this.assessment[id_recipient_user] = {};
            this.assessment[id_recipient_user][id_owner_comment] = new_assessment;
            console.log("Assessment created.");
        }else{
            if(!(id_owner_comment in this.assessment[id_recipient_user])){
                var new_assessment = new assessment(comment_text,valuation_number,date_created);
                this.assessment[id_recipient_user][id_owner_comment] = new_assessment;
                console.log("Assessment created.");
            }else{
                console.log("This id_owner_comment already exists.")
            }
        }
    }

    getAssessmentUser(id_recipient_user){
        return this.assessment[id_recipient_user];
    }

    getConcretedAssessment(id_recipient_user,id_owner_comment){
        return this.assessment[id_recipient_user][id_owner_comment];
    }
}

module.exports = AssessmentController;
