$('.W_ti_ul li').each((index,element)=>{
 let answers = $(element).find('.W_ml45').attr('answer').split(',');
 for(let answer of answers){
    $(element).find('input').each(
    (index,element)=>{
        if($(element).attr('value') == answer){
            $(element).click();
        }
    }
    );
 }
})

$('.W_ti_ul li input').each((i,e)=>{$(e).attr("checked",false)});
$('huahua').click(
    function(){
        $.ajax(
            {
                aysnc:false,
                type:'post',
                url:'http://xxjs.dtdjzx.gov.cn/quiz-api/game_info/lookBackSubject',
                data:{'roundOnlyId':roundOnlyId},
                dataType:'json',
                success:function(data){
                    let answers = data.data.dateList;
                    for(let i = 0; i<answers.length;i++){
                        for(let answer of answers[i].answer.split(',')){
                            $($('.W_ti_ul li')[i]).find('input').each(
                                function(i,e){
                                    if($(e).attr('value') == answer){
                                        $(e).click();
                                    } 
                                }
                            );
                        }
                    }
                }
            }
            uEwzBeCKKCVeQB5nU2cU7MQdWFw=
        );
    }
);