(function() {
    $(document).ready(function() {
        var chatListObj = $('#cui__list'),
            chatAnswersObj = $('#cui__responses'),
            answerBubbles = chatAnswersObj.find('.cui__bubble'),
            heartAnimation;

        var conversation = {
            one: {
                messages: [{
                        type: "1",
                        text: "Bom dia, Bebs 😘😘😘"
                    },
                    {
                        type: "1",
                        text: "Dormiu bem?"
                    },
                    {
                        type: "1",
                        text: "Ah, se vc não tiver vendo um balão verdinho no final da tela, scrolla pra baixo 👇😊"
                    }
                ],
                answers: [{
                    message: "Bom dia, prin 😘😘😘",
                    id: "two"
                }]
            },
            two: {
                messages: [{
                    type: "1",
                    text: "Maravilhosidadeeeeee"
                }, {
                    type: "1",
                    text: "feliz 2 anos de namoroooooo ❤❤❤",
                    action: startHeartAnimation
                }],
                answers: [{
                    message: "Tico, como vc é lindo 😍😍😍",
                    id: "three"
                }]
            },
            three: {
                messages: [{
                        type: "1",
                        text: "Hmmmm",
                        action: stopHeartAnimation

                    },
                    {
                        type: "1",
                        text: "eu nao sou beeeeem o seu Tico 😋"
                    },
                    {
                        type: "1",
                        text: "Eu sou mais uma CUI (Conversational User Interface) 🤖👾"
                    },
                    {
                        type: "1",
                        text: "O Ber tava lendo um monte de coisas na semana passada, sabe. Pra tese de mestrado dele"
                    },
                    {
                        type: "1",
                        text: "Aí ele se interessou por essa area"
                    }
                ],
                answers: [{
                    message: "Nossa, que inteligentao 🤓",
                    id: "four"
                }, {
                    message: "O que é isso?🤔",
                    id: "five"
                }]
            },
            four: {
                messages: [{
                        type: "1",
                        text: "O Ber sempre quis ser pavaozinho, ainda mais pra vc 🦄"
                    },
                    {
                        type: "1",
                        text: "Mas é perfeito o Ber fazer uma tese sobre conversas, né?"
                    },
                    {
                        type: "1",
                        text: "Vcs conversaram tanto tanto tanto por mensaginha que ele até se pergunta se vcs tem mais horas de conversa ao vivo ou por whatsapp"
                    }
                ],
                answers: [{
                    message: "Hey, mas se vc nao é o Ber, como que vc veio me chamar de Bebs?",
                    id: "six"
                }]
            },
            five: {
                messages: [{
                    type: "2",
                    url: "https://www.fastcodesign.com/3058546/conversational-interfaces-explained",
                    title: "Conversational Interfaces, Explained",
                    text: "Companies from Apple to Facebook and Slack are embracing conversational interfaces–but what are they, and why are they important?",
                    image: "https://static1.squarespace.com/static/572f8a5622482e952ab4082a/t/58867d1029687f26ebf3ba8c/1485208851267/c3po-omg.gif?format=1000w"
                }],
                answers: [{
                    message: "Nossa, que inteligentao 🤓",
                    id: "four"
                }]
            },
            six: {
                messages: [{
                        type: "1",
                        text: "Busted!😫"
                    },
                    {
                        type: "1",
                        text: "Lembra daquele episódio de Black Mirror que vcs assitiram juntos que o marido morre e a muié fica falando com ele por celular?"
                    },
                ],
                answers: [{
                        message: "Lembro!!!",
                        id: "seven"
                    },
                    {
                        message: "Não lembro. Tava dando uns pega no Ber",
                        id: "eight"
                    }
                ]
            },
            seven: {
                messages: [{
                        type: "1",
                        text: "Entãooooo. Eu sei/sou muitas coisas do Ber"
                    },
                    {
                        type: "1",
                        text: "E uma coisa que sei é que o Ber jamais me deixaria ser igual ele e correr o risco de vc ter um crush por mim."
                    },
                    {
                        type: "1",
                        text: "Ele tem ciúmes de vc!💏"
                    },
                    {
                        type: "1",
                        text: "Cê sabia que ele não tem ciúmes nem da irmã dele?"
                    }
                ],
                answers: [{
                    message: "Hahaha, sim! ",
                    id: "nine"
                }]
            },
            eight: {
                messages: [{
                    type: "2",
                    url: "https://en.wikipedia.org/wiki/Be_Right_Back",
                    title: "Be Right Back",
                    text: "The episode tells the story of Martha (Hayley Atwell), a young woman whose boyfriend Ash (Domhnall Gleeson) is killed in a car accident. As she mourns him, she discovers that technology now allows her to communicate with an artificial intelligence imitating Ash, and reluctantly decides to try.",
                    image: "https://i.giphy.com/Z4AFpXv2ISDGE.gif"
                }],
                answers: [{
                    message: "Lembreeei!!! ",
                    id: "seven"
                }]
            },
            nine: {
                messages: [{
                        type: "1",
                        text: "Pois é... Ele aprendeu tanta coisa com vc: Ter ciúmes, Cozinhar, Alemão"
                    },
                    {
                        type: "1",
                        text: "Eu também posso falar em alemão, quer ver?"
                    },
                    {
                        type: "1",
                        text: "Ich liebe dich!"
                    }
                ],
                answers: [{
                    message: "Calma aí, casanova!😠🚨",
                    id: "ten"
                }]
            },
            ten: {
                messages: [{
                        type: "1",
                        text: "Eu sei eu sei... Eu ouvi falar que vc não trocaria o Ber nem por ele mesmo"
                    },
                    {
                        type: "1",
                        text: "Vcs são o resultado da conspiração do universo 🌌"
                    }
                ],
                answers: [{
                    message: "Tá tá, mas cadê o Ber?😠",
                    id: "eleven"
                }]
            },
            eleven: {
                messages: [{
                        type: "1",
                        text: "Vou trazer ele pra vc!"
                    },
                    {
                        type: "1",
                        text: "A gente vai conversar mais no futuro"
                    },
                    {
                        type: "1",
                        text: "Quando o Ber me fizer mais inteligente"
                    },
                    {
                        type: "1",
                        text: "Feliz dois anos de namoro, Marina!"
                    },
                    {
                        type: "3",
                        file: ""
                    }
                ],
                answers: [{
                    message: "Amo você, morzin!",
                    id: ""
                },
                {
                    message: "Tchau",
                    id: ""
                }]
            }
        };




        function startHeartAnimation() {
            setTimeout(function() { // only to give the animation some room for breathing
                heartAnimation = setInterval(function() {
                    var r_num = Math.floor(Math.random() * 40) + 1;
                    var r_size = Math.floor(Math.random() * 65) + 10;
                    var r_left = Math.floor(Math.random() * 100) + 1;
                    var r_bg = Math.floor(Math.random() * 25) + 100;
                    var r_time = Math.floor(Math.random() * 5) + 5;

                    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

                    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

                    $('.heart').each(function() {
                        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
                        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
                        if (top <= -100 || width >= 150) {
                            $(this).detach();
                        }
                    });
                }, 500);
            }, 500);

        }

        function stopHeartAnimation() {
            clearInterval(heartAnimation);
        }

        function createBubble(obj) {
            switch (obj.type) {
                case "1": // text
                    var newMessage = $(
                        '<li class="cui__list__item"><div class="cui__bubble typing animated slideInLeft"><div class="ellipses">...</div><div class="text invisible"></div></div></li>'
                    );
                    newMessage.find('.text')[0].innerText = obj.text;
                    setTimeout(function() {
                        newMessage.find('.cui__bubble')[0].classList.add("grow");
                    }, 1000);
                    if (obj.action) {
                        obj.action();
                    }
                    return newMessage;
                    break;

                case "2": // link
                    var newMessage = $(
                        '<li class="cui__list__item cui__list__item--link"><div class="cui__bubble typing animated slideInLeft"><div class="ellipses">...</div><div class="text invisible"><div class="link__teaser"><div class="link__image"><img src="" alt=""></div><div class="link_info"><div class="link__title"></div><div class="link__text"></div></div></div><a href="" class="link__url">Link</a></div></div></li>'
                    );
                    newMessage.find('.link__image img')[0].src = obj.image;
                    newMessage.find('.link__title')[0].innerText = obj.title;
                    newMessage.find('.link__text')[0].innerText = obj.text;
                    newMessage.find('.link__url')[0].href = obj.url;

                    setTimeout(function() {
                        newMessage.find('.cui__bubble')[0].classList.add("grow");
                    }, 1000);
                    return newMessage;
                break;
                case "3": // video hardcoded
                    var newMessage = $(
                        '<li class="cui__list__item cui__list__item--link"><div class="cui__bubble animated slideInLeft"</div><iframe width="250" height="200" src="https://www.youtube.com/embed/i_ONBDOYygk" frameborder="0" allowfullscreen></iframe></li>'
                    );

                    return newMessage;
                break;
            }

        }

        function displayMessage(msg) {
            chatListObj.append(msg);
        }

        function displayAnswerOptions() {
            chatAnswersObj.removeClass('hidden');
            chatAnswersObj.removeClass('slideOutDown');
            chatAnswersObj.removeClass('slideInUp');
            chatAnswersObj.addClass('slideInUp');
        }

        function hideAnswerOptions() {
            chatAnswersObj.removeClass('hidden');
            chatAnswersObj.removeClass('slideOutDown');
            chatAnswersObj.removeClass('slideInUp');
            chatAnswersObj.addClass('slideOutDown');
        }

        function clickOnAnswerTheConversation(event) {
            console.log(event.data.answerNode);
            var answerText = event.data.answerNode.message,
                answerId = event.data.answerNode.id
            var answerBubble = '<li class="cui__list__item"><div class="cui__bubble cui__bubble__response animated  slideInRight"><div class="text">' + answerText + '</div></div></li>';
            hideAnswerOptions();
            displayMessage(answerBubble);

            setTimeout(function() {
                orchestrator(conversation[answerId])
            }, 1000);
        }

        function displayAnswers(answers) {
            answerBubbles.eq(1).removeClass('hidden');
            answers.forEach(function(answer, index) {
                answerBubbles[index].innerText = answer.message;
                answerBubbles.eq(index).unbind("click");
                answerBubbles.eq(index).click({
                    answerNode: answer
                }, clickOnAnswerTheConversation);
            });
            if (answers.length === 1) {
                answerBubbles.eq(1).addClass('hidden');
            }
            setTimeout(function() {
                displayAnswerOptions();
            }, 1500);
        }

        function init() {
            orchestrator(conversation.one);
        }

        function orchestrator(chatRoot) {
            chatRoot.messages.forEach(function(msgObj, index) {
                setTimeout(function() {
                    displayMessage(createBubble(msgObj));
                    if (index === chatRoot.messages.length - 1) {
                        displayAnswers(chatRoot.answers);
                    }
                }, 2200 * index);
            });
        }

        init();

    });
})();
