export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    if(tooltips) {
        tooltips.forEach(tooltip => {
            tooltip.addEventListener('mouseover', onMouseOver);
        });
        
        function onMouseOver() {
            const tooltipBox = criarTooltip(this);
        
            onMouseMove.tooltipBox = tooltipBox;
            onMouseMove.element = this;
            this.addEventListener('mousemove', onMouseMove);
            
            onMouseLeave.tooltipBox = tooltipBox;
            onMouseLeave.element = this;
            this.addEventListener('mouseleave', onMouseLeave);
        
        }
        
        const onMouseLeave = {
            handleEvent() {
                this.tooltipBox.remove();
                this.element.removeEventListener('mouseleave', onMouseLeave);
                this.element.removeEventListener('mousemove', onMouseMove);
            }
        }
        
        const onMouseMove = {
            handleEvent(event) {
                this.tooltipBox.style.top = event.pageY + 8 + 'px';
                this.tooltipBox.style.left = event.pageX + 8 + 'px';
            }
        }
        
        function criarTooltip(element) {
            const tooltipBox = document.createElement('div');
            tooltipBox.classList.add('tooltip');
            tooltipBox.innerText = element.getAttribute('aria-label');
            document.body.appendChild(tooltipBox);
            return tooltipBox;
        }
    }
}
