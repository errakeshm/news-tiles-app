import { animation, trigger, state, style, transition, animate, group, keyframes, AnimationTriggerMetadata, useAnimation } from '@angular/animations';
import { IAnimateOptions } from './common';

export const ripple = animation([
    animate('300ms', keyframes([
        style({
            backgroundImage: `radial-gradient(circle at 50% 50%, {{hoverColor}} 2%, transparent 10%)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '0 0'
        }),
        style({
            backgroundImage: `radial-gradient(circle at 50% 50%, {{hoverColor}} 2%, transparent 10%)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1000% 1000%'
        })
    ]))
]);

export interface IRippleAnimation extends IAnimateOptions{
    hoverColor?: string;
}

export function rippleAnimation(options?: IRippleAnimation): AnimationTriggerMetadata {
    return trigger((options && options.element) || 'rippleAnimation', [
        transition('0=>1, 1=>0', [
            useAnimation(ripple, {
                params: {
                    hoverColor: options.hoverColor
                }
            })
        ],
        {
            params: {
                hoverColor : 'white'
            }
        })
    ]);
}