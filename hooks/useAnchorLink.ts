export function useAnchorLink() {
    function getAnchorHandler(sectionId: string) {
        return function(event: any) {
            event.preventDefault();

            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

            const urlWithoutCurrentHash = `${window.location}`.replace(/#[\w]+/g, '');
            window.history.pushState(null, '', `${urlWithoutCurrentHash}#${sectionId}`);
        }
    }

    return getAnchorHandler;
}