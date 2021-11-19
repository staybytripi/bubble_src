$('.slider').slick({
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesPerRow: 2.5,//スライドを画面に3枚見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: true,//下部ドットナビゲーションの表示
	});
