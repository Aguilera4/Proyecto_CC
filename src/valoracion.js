class Valoracion {
    
    constructor(id_owner_comment,id_recipient_user,comment_text,valuation_number){
        this.id_owner_comment = id_owner_comment;
        this.id_recipient_user = id_recipient_user;
        this.comment_text = comment_text;
        this.valuation_number = valuation_number;
    }

    change_comment(new_comment){
        this.comment_text = new_comment;
    }


}
