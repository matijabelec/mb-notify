# Angular module 'mbNotify'
Angularjs notify module for Bulma.io - css framework

## Description

```javascript
NotifyService.notify(message, options)
```
Message is mandatory (if not supplied, an empty notification will appear).
Options are used for further customization of notification preview. Available attributes in options are:

attribute | default | description |
---- | ---- | --- 
delay | 4000 | how long to delay until notification is self closed (in milliseconds)
type | - | can be one of: 'success', 'warning' or 'error'

## Examples

```javascript
NotifyService.notify('Here goes notification message!');
NotifyService.success('Here goes success message!');
NotifyService.warning('Here goes warning message!');
NotifyService.error('Here goes error message!');

NotifyService.notify('Here goes notification message!', {delay: 5000, type: 'error'});

// next two are the same
NotifyService.notify('Here goes message!', {delay: 2000, type: 'error'});
NotifyService.error('Here goes message!', {delay: 2000});
```
## Licence

MIT - copyright (c) Matija Belec
