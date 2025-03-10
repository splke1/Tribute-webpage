const facts = [
    "Tim Berners-Lee was knighted by Queen Elizabeth II in 2004 for his contributions to the internet.",
    "He created the first website ever, which went live on August 6, 1991, explaining the World Wide Web.",
    "Berners-Lee graduated from Oxford University with a degree in Physics before diving into computing.",
    "He founded the World Wide Web Foundation in 2009 to promote an open and accessible internet.",
    "In 2016, he received the Turing Award, often called the 'Nobel Prize of Computing,' for inventing the web.",
    "He coined the term 'World Wide Web' and wrote the original HTTP and HTML specifications."
];

function showRandomFact() {
    const modal = document.getElementById("factModal");
    const factText = document.getElementById("factText");
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("factModal").style.display = "none";
}

function sharePlatform(event, platform) {
    event.preventDefault();
    const url = window.location.href;
    let shareUrl;
    if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    else if (platform === 'x') shareUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}`;
    else if (platform === 'instagram') shareUrl = `https://www.instagram.com/`;
    window.open(shareUrl, '_blank');
}

function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Tribute to Tim Berners-Lee',
            text: 'Check out this tribute to the inventor of the World Wide Web!',
            url: window.location.href
        }).catch(console.error);
    } else {
        alert('Web Share API not supported. Use the social media links to share!');
    }
}