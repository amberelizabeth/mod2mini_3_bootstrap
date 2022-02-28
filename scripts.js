$(function(){

    //hide success message at start
    $('#success_msg').hide();

    function checkTextIfEmpty(inputID, errorID, errorText){
        let isValid = false;

        if( !$(inputID).val() ){
            $(errorID).text(`${errorText} is empty.`);
            $(errorID).show();
        }else{
            $(errorID).hide();
            isValid = true;
        }

        return isValid;
    }

    function checkSelectIfEmpty(inputID, errorID, errorText){
        let isValid = false;
        let selector = inputID+' option:selected';

        if( !$(selector).val() ){
            $(errorID).text(`A ${errorText} is not selected.`);
            $(errorID).show();
        }else{
            $(errorID).hide();
            isValid = true;
        }
        return isValid;
    }

    // Check each input on blur for empty status - show error if so
    $('#title').on('blur', function(){
        checkTextIfEmpty('#title', '#err_title', 'Title');
    });

    $('#description').on('blur', function(){
        checkTextIfEmpty('#description', '#err_desc', 'Description');
    });

    $('#category').on('blur', function(){
        checkTextIfEmpty('#category', '#err_cat', 'Category');
    });

    $('#priority').on('blur', function(){
        checkSelectIfEmpty('#priority', '#err_priority', 'Priority Level');
    });

    $('#progress').on('blur', function(){
        checkSelectIfEmpty('#progress', '#err_progress', 'Progress Level');
    });


    // when submit button is clicked, check all form inputs to see if empty
    $('#submitBtn').click(function(){

        if( checkTextIfEmpty('#title', '#err_title', 'Title') && checkTextIfEmpty('#description', '#err_desc', 'Description') && checkTextIfEmpty('#category', '#err_cat', 'Category') && checkSelectIfEmpty('#priority', '#err_priority', 'Priority Level') && checkSelectIfEmpty('#progress', '#err_progress', 'Progress Level')){

            $('#success_msg').show();
            $('input').val('');
        }
    });

});