export function calculateLimit() {
    if(typeof window === 'undefined') return 4;

    if(window.innerWidth > 1024) {
        return 4;
    }
    else if(window.innerWidth <= 1024 && window.innerWidth > 480) {
        return 4;
    }
    else if(window.innerWidth <= 480) {
        return 2;
    }
    else {
        return 4;
    }
}