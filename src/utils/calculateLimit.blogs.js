export function calculateLimit() {
    if(window.length > 768) {
        return 4;
    }
    else if(window.length <= 768 && window.length > 480) {
        return 4;
    }
    else if(window.length <= 480) {
        return 2;
    }
    else {
        return 6;
    }
}