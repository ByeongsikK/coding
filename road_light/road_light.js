$(document).ready(function () {


    // -----고장신고-----
    $(`.main .left_bt`).click(function () {
        $(`.main`).hide();
        $(`.sec1`).show();
        $(`.ganpyeon_bt`).addClass(`singo_sign`);
        $(`.ganpyeon_bt`).addClass(function () {
            $(`.ganpyeon_bt`).click(function () {
                $(`.sec1`).hide();
                $(`.sec2`).show();
                $(`.my_minwon`).hide();
                $(`.logout`).show();
                // -----카카오 맵-----
                $(`#map`).show(function () {
                    var mapContainer = document.getElementById('map'),
                        // 지도를 표시할 div 

                        mapOption = {
                            center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                            level: 3 // 지도의 확대 레벨
                        };

                    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


                    var positions = [{
                            title: '가로등1',
                            latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                        },
                        {
                            title: '가로등2',
                            latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                        },
                        {
                            title: '가로등3',
                            latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                        },
                        {
                            title: '가로등4',
                            latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                        }
                    ];

                    // 마커 이미지의 이미지 주소입니다
                    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                    for (var i = 0; i < positions.length; i++) {

                        // 마커 이미지의 이미지 크기 입니다
                        var imageSize = new kakao.maps.Size(24, 35);

                        // 마커 이미지를 생성합니다    
                        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                        // 마커를 생성합니다
                        var marker = new kakao.maps.Marker({
                            map: map, // 마커를 표시할 지도
                            position: positions[i].latlng, // 마커를 표시할 위치
                            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                            image: markerImage // 마커 이미지 
                        });
                    };
                    // -----카카오 맵-----

                    // ----- 지도 마커 클릭 이벤트-----
                    $(`img[title=가로등1`).click(function () {
                        $(`.photo_box.n2`).hide();
                        $(`.photo_box.n3`).hide();
                        $(`.photo_box.n4`).hide();
                        $(`.photo_box.n1`).show();
                        $(`.photo_box.n1`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo2`).hide();
                        $(`.garo3`).hide();
                        $(`.garo4`).hide();
                        $(`.garo1`).show();
                    });

                    $(`img[title=가로등2`).click(function () {
                        $(`.photo_box.n1`).hide();
                        $(`.photo_box.n3`).hide();
                        $(`.photo_box.n4`).hide();
                        $(`.photo_box.n2`).show();
                        $(`.photo_box.n2`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo1`).hide();
                        $(`.garo3`).hide();
                        $(`.garo4`).hide();
                        $(`.garo2`).show();
                    });

                    $(`img[title=가로등3`).click(function () {
                        $(`.photo_box.n1`).hide();
                        $(`.photo_box.n2`).hide();
                        $(`.photo_box.n4`).hide();
                        $(`.photo_box.n3`).show();
                        $(`.photo_box.n3`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo1`).hide();
                        $(`.garo2`).hide();
                        $(`.garo4`).hide();
                        $(`.garo3`).show();
                    });

                    $(`img[title=가로등4`).click(function () {
                        $(`.photo_box.n1`).hide();
                        $(`.photo_box.n2`).hide();
                        $(`.photo_box.n3`).hide();
                        $(`.photo_box.n4`).show();
                        $(`.photo_box.n4`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo1`).hide();
                        $(`.garo2`).hide();
                        $(`.garo3`).hide();
                        $(`.garo4`).show();
                    });
                    // ----- 지도 마커 클릭 이벤트-----
                });
            });
        });
    });

    $(`.menu a:first`).click(function () {
        $(`.main`).hide();
        $(`.sec1`).show();
    });

    $(`.logout`).click(function () {
        $(`.sec1`).hide();
        $(`.sec2`).hide();
        $(`.sec3`).hide();
        $(`.main`).show();
        $(`.logout`).hide();
        $(`.my_minwon`).show();
    });


    // -----고장신고-----


    // -----처리현황-----

    $(`.main .right_bt`).click(function () {
        $(`.main`).hide();
        $(`.sec3`).show();
        $(`.my_list`).hide();
    });

    $(`.my_minwon`).click(function () {
        $(`.sec3`).hide();
        $(`.sec1`).show();
        $(`.ganpyeon_bt`).addClass(`cheoli_sign`).end();
        $(`.ganpyeon_bt.cheoli_sign`).click(function(){
            
            $(`.sec1`).hide();
            $(`.sec3`).show();
            $(`.my_list`).show();
            $(`.my_minwon`).hide();
            $(`.logout`).show();
        })
    });

    console.log($(`.ganpyeon_bt`))
   
    $(`.ganpyeon_bt`).click(function () {
        console.log($(`.ganpyeon_bt.cheoli_sign`).innerHTML);
    });

    // $(`.ganpyeon_bt.cheoli_sign`).click(function () {
    //     $(`.sec1`).hide();
    //     $(`.sec3`).show();
    //     $(`.my_list`).show();
    //     $(`.my_minwon`).hide();
    //     $(`.logout`).show();
    // });
    


    // -----처리현황-----



    // $(`.ganpyeon_bt sign`).click(function () {
    //     $(`.my_minwon`).hide();
    //     $(`.logout`).show();
    //     $(`.sec1`).hide();
    //     $(`.sec2`).show();

    //     // -----카카오 맵-----
    //     $(`#map`).show(function () {
    //         var mapContainer = document.getElementById('map'),
    //             // 지도를 표시할 div 

    //             mapOption = {
    //                 center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
    //                 level: 3 // 지도의 확대 레벨
    //             };

    //         var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


    //         var positions = [{
    //                 title: '가로등1',
    //                 latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
    //             },
    //             {
    //                 title: '가로등2',
    //                 latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
    //             },
    //             {
    //                 title: '가로등3',
    //                 latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
    //             },
    //             {
    //                 title: '가로등4',
    //                 latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
    //             }
    //         ];

    //         // 마커 이미지의 이미지 주소입니다
    //         var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    //         for (var i = 0; i < positions.length; i++) {

    //             // 마커 이미지의 이미지 크기 입니다
    //             var imageSize = new kakao.maps.Size(24, 35);

    //             // 마커 이미지를 생성합니다    
    //             var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    //             // 마커를 생성합니다
    //             var marker = new kakao.maps.Marker({
    //                 map: map, // 마커를 표시할 지도
    //                 position: positions[i].latlng, // 마커를 표시할 위치
    //                 title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //                 image: markerImage // 마커 이미지 
    //             });
    //         };
    //         // -----카카오 맵-----

    //         // ----- 지도 마커 클릭 이벤트-----
    //         $(`img[title=가로등1`).click(function () {
    //             $(`.photo_box.n2`).hide();
    //             $(`.photo_box.n3`).hide();
    //             $(`.photo_box.n4`).hide();
    //             $(`.photo_box.n1`).show();
    //             $(`.photo_box.n1`).css('display', 'flex');
    //             $(`.garo0`).hide();
    //             $(`.garo2`).hide();
    //             $(`.garo3`).hide();
    //             $(`.garo4`).hide();
    //             $(`.garo1`).show();
    //         });

    //         $(`img[title=가로등2`).click(function () {
    //             $(`.photo_box.n1`).hide();
    //             $(`.photo_box.n3`).hide();
    //             $(`.photo_box.n4`).hide();
    //             $(`.photo_box.n2`).show();
    //             $(`.photo_box.n2`).css('display', 'flex');
    //             $(`.garo0`).hide();
    //             $(`.garo1`).hide();
    //             $(`.garo3`).hide();
    //             $(`.garo4`).hide();
    //             $(`.garo2`).show();
    //         });

    //         $(`img[title=가로등3`).click(function () {
    //             $(`.photo_box.n1`).hide();
    //             $(`.photo_box.n2`).hide();
    //             $(`.photo_box.n4`).hide();
    //             $(`.photo_box.n3`).show();
    //             $(`.photo_box.n3`).css('display', 'flex');
    //             $(`.garo0`).hide();
    //             $(`.garo1`).hide();
    //             $(`.garo2`).hide();
    //             $(`.garo4`).hide();
    //             $(`.garo3`).show();
    //         });

    //         $(`img[title=가로등4`).click(function () {
    //             $(`.photo_box.n1`).hide();
    //             $(`.photo_box.n2`).hide();
    //             $(`.photo_box.n3`).hide();
    //             $(`.photo_box.n4`).show();
    //             $(`.photo_box.n4`).css('display', 'flex');
    //             $(`.garo0`).hide();
    //             $(`.garo1`).hide();
    //             $(`.garo2`).hide();
    //             $(`.garo3`).hide();
    //             $(`.garo4`).show();
    //         });
    //         // ----- 지도 마커 클릭 이벤트-----
    //     });
    // });



    // -----처리현황 페이징 버튼-----

    $('.pgnum:first-child').addClass('on');

    $('.pgnum').click(function () {
        $('.pgnum').addClass('on')
            .siblings().removeClass('on').end();
    });

    $(`.pgnum`).click(function () {
        $(this).addClass(`on`);
    });

    // -----처리현황 페이징 버튼-----            
});
