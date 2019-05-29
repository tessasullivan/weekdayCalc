import $ from 'jquery';
import { getWeekday } from './dayCalc.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$().ready(function(){
    
    console.log(getWeekday);

    $("#submitBtn").click(function()
    {
        console.log($("#dateInput").val());
        let d = $("#dateInput").val();

        $("#resultDisplay").text(getWeekday(d));

  });
});