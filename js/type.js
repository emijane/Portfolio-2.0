new TypeIt("#typewrite", {
	speed: 90,
	waitUntilVisible: true,
	loop: true,
})
	.type("Hi, I'm Emma")
	.pause(10000)
	.delete(undefined, {
		speed: 150,
	})
	.go();
