const on= ["Oui","Non"];
const rs1= ["Homme","Femme"];
const rs2= ["18-24 ans","25-34 ans","35-44 ans","45-54 ans","55-64 ans","65 ans ou plus"];
const q3= ["Familial et Social","Santé et Recherche","Finance et Économie","Éducation et Apprentissage","Transport et Logistique","Technologie et Industrie","Divertissement et Médias","Autre"];
const q4= ["Automatisation de tâches répétitives et ennuyeuses","Amélioration de l'efficacité des processus et des services","Prédiction et prévention des problèmes dans divers domaines","Assistance dans la prise de décisions complexes","Amélioration de la sécurité et de la protection des données","Accès facilité à l'information et aux ressources","Autre"];
const q8=["Identification erronée d'aéronefs ou d'objets conventionnels","Projets militaires secrets","Phénomènes naturels (par exemple, phénomènes météorologiques, météores)","acteurs psychologiques ou perceptuels (par exemple, illusions, canulars)","Visites extraterrestres","Êtres/entités provenant d'autres dimensions ou réalités parallèles"]


  $(document).ready(function() {
    $("input[name='q3']").change(function() {
      var $checkboxes = $("input[name='q3']:checked");
      if ($checkboxes.length > 3) {
        $(this).prop('checked', false);
      }
    });
    
    $("#q3_autre_checkbox").change(function() {
      if ($(this).is(":checked")) {
        $(".in").show();
        $("#q3_other_input").show();
        $("#btnq3").show();
        $("#btnq33").hide();
       

      } else {
        $(".in").hide();
        $("#q3_other_input").hide();
        $("#btnq3").hide();
        $("#btnq33").show();
        
      }
    });
  });

  $(document).ready(function() {
    $("input[name='q4']").change(function() {
      var $checkboxes = $("input[name='q4']:checked");
      if ($checkboxes.length > 3) {
        $(this).prop('checked', false);
      }
    });
    
    $("#q4_autre_checkbox").change(function() {
      if ($(this).is(":checked")) {
        $(".in").show();
        $("#q4_other_input").show();
        $("#btnq4").show();
        $("#btnq44").hide();
       

      } else {
        $(".in").hide();
        $("#q4_other_input").hide();
        $("#btnq4").hide();
        $("#btnq44").show();
        
      }
    });
  });


    $('#submit').hide();

     


    $(".question:first").show(); // Show the first question

    $(".nextQuestion").click(function() {


        var currentQuestion = $(this).closest(".question");
        var nextQuestion = currentQuestion.next(".question");

        
       
          if (currentQuestion.find("input[type='radio'][name='q2'][value='2']").is(":checked")) {
            currentQuestion.append("<div class='responseD'><p class='response'>" + on[1] + "</p></div>");
            nextQuestion=nextQuestion.next(".question");
            nextQuestion.show();
          }
          else{
              // Validate current question before proceeding to the next one
            var currentInput = currentQuestion.find("input:radio:checked, input:checkbox:checked, input:text").closest("label").find("input");
            
            if (currentInput.length === 0 || (currentInput.is(":radio") && currentInput.filter(":checked").length === 0) || (currentInput.is(":checkbox") && currentInput.filter(":checked").length === 0) || (currentInput.is(":text") && currentInput.val() == "") ) {
                // Show an error message or perform any necessary validation logic
                $('.error').html("Veuillez choisir une réponse");

                  $('.error').fadeIn();
            
                  setTimeout(function() {
                    $('.error').fadeOut();
                  }, 3000);
                
                return;
            }
            else{
                if(currentInput.attr("name")=="q3")
                {
                    var $chb3 = $("input[name='q3']:checked");
                    if ($chb3.length > 0 && $chb3.length <= 3) {
                        if($("#q3_autre_checkbox").is(":checked") && $("#q3_other_input").val()==""){
                            $('.error').html("Veuillez préciser");
                            $('.error').fadeIn();
            
                            setTimeout(function() {
                              $('.error').fadeOut();
                            }, 3000);
                            return;
                        }
                    }else{
                      $('.error').html("Veuillez choisir une réponse");
                      $('.error').fadeIn();
            
                      setTimeout(function() {
                        $('.error').fadeOut();
                      }, 3000);
                        return;
                    }
                }

                if(currentQuestion.attr("id")=="question3")
                {
                  let rs3=parseInt($('#rs3').val());
                  if(rs3<1000 || rs3>95999)
                  {
                    
                    $('.error').html("Le code postal est incorrect");

                    $('.error').fadeIn();
              
                    setTimeout(function() {
                      $('.error').fadeOut();
                    }, 3000);
                    return;

                  }
                }

                if(currentQuestion.attr("id")=="question17")
                {
                  let email=$('#email').val();
                  if(!isValidEmail(email))
                  {
                    
                    $('.error').html("L'adresse mail cest incorrect");

                    $('.error').fadeIn();
              
                    setTimeout(function() {
                      $('.error').fadeOut();
                    }, 3000);
                    return;

                  }
                }

                if(currentInput.attr("name")=="q4")
                {
                    var $chb4 = $("input[name='q4']:checked");
                    if ($chb4.length > 0 && $chb4.length <= 3) {
                        if($("#q4_autre_checkbox").is(":checked") && $("#q4_other_input").val()==""){
                            alert("Please answer the question before proceeding.");
                            return;
                        }
                    }else{
                        alert("Please answer the question before proceeding.");
                        return;
                    }
                }
                if(currentQuestion.attr("id")=="question17") {
                  $("#submit").show();
                }
            }

            var checkedValues = [];
            if(currentInput.attr("name") == "rs1") {
              $("#question1 input[name=rs1]:checked").each(function() {
                checkedValues.push(rs1[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
              });
            }
            else if(currentInput.attr("name") == "rs2") {
              $("#question2 input[name=rs2]:checked").each(function() {
                checkedValues.push(rs2[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</>");
              });
            }
            else if(currentInput.attr("name") == "rs3"){
              currentQuestion.append("<div class='responseD'><p class='response'>"+ $("#rs3").val() + "</p>");
            }
            else if(currentInput.attr("name") == "rs4"){
              currentQuestion.append("<div class='responseD'><p class='response'>"+ $("#rs4").val() + "</p>");
            }
            else if(currentInput.attr("name") == "q1") {
              $("#question5 input[name=q1]:checked").each(function() {
                checkedValues.push(on[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p>");
              });
            }
            else if(currentInput.attr("name") == "q2") {
              $("#question6 input[name=q2]:checked").each(function() {
                checkedValues.push(on[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>"+ checkedValues.join(", ") + "</p>");
              });
            }
            else if(currentInput.attr("name") == "q3") {
              $("#question7 input[name=q3]:checked").each(function() {
                checkedValues.push(q3[$(this).val()-1]);
                
              });
              if($("#q3_autre_checkbox").is(":checked"))
              {
                currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") +"( "+$("#q3_other_input").val()+ " ) </p>");
              }
              else
              {
                currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p>");
              }
                
            }
            else if(currentInput.attr("name") == "q4") {
              $("#question8 input[name=q4]:checked").each(function() {
                checkedValues.push(q4[$(this).val()-1]);
                
              });
              if($("#q4_autre_checkbox").is(":checked"))
              {
                currentQuestion.append("<div class='responseD'><p class='response'>"+ checkedValues.join(", ") +"( "+$("#q4_other_input").val()+ " ) </p>");
              }
              else
              {
                currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p>");
              }
            }
            else if(currentInput.attr("name") == "q5") {
              $("#question9 input[name=q5]:checked").each(function() {
                checkedValues.push(on[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p>");
              });
            }
            else if(currentInput.attr("name") == "q6") {
              $("#question10 input[name=q6]:checked").each(function() {
                checkedValues.push(on[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>"+ checkedValues.join(", ") + "</p>");
              });
            }
            else if(currentInput.attr("name") == "q7") {
              $("#question11 input[name=q7]:checked").each(function() {
                checkedValues.push(on[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>"+ checkedValues.join(", ") + "</p>");
              });
            }
            else if(currentInput.attr("name") == "q8") {
              $("#question12 input[name=q8]:checked").each(function() {
                checkedValues.push(q8[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>"+ checkedValues.join(", ") + "</p>");
              });
            }
            else if(currentInput.attr("name") == "q9") {
              $("#question13 input[name=q9]:checked").each(function() {
                checkedValues.push(on[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p>");
              });
            }
            else if(currentInput.attr("name") == "q10") {
              $("#question14 input[name=q10]:checked").each(function() {
                checkedValues.push(on[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>"+ checkedValues.join(", ") + "</p>");
              });
            }
            else if(currentInput.attr("name") == "q11") {
              $("#question15 input[name=q11]:checked").each(function() {
                checkedValues.push(on[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>"+ checkedValues.join(", ") + "</p>");
              });
            }
            else if(currentInput.attr("name") == "email"){
              currentQuestion.append("<div class='responseD'><p class='response'>" + $("#email").val() + "</p>");
            }
            else if(currentInput.attr("name") == "q12") {
              $("#question17 input[name=q12]:checked").each(function() {
                checkedValues.push(on[$(this).val()-1]);
                currentQuestion.append("<div class='responseD'><p class='response'>"+ checkedValues.join(", ") + "</p>");
              });
            }
        

        

            // Hide the next button for the current question
            currentQuestion.find("input").prop("disabled", true);

            currentQuestion.find(".nextQuestion, .txt").hide();
            if(currentQuestion.attr("id")!="question17"){
                nextQuestion.show();
            }else{
                nextQuestion.hide();
            }
            

            

          
          }
        
        
        

        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');

        
        
    });







    $('#rs3').on('keyup', function () {
      this.value = this.value.replace(/[^0-9\.]/g,'');
   });
   


   function isValidEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }





