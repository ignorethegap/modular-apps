
### Debugging

To debug build steps you can get extra information through the `DEBUG` env variable.

    DEBUG=* npm run karma-once

This is a shortcut for

    DEBUG=* karma start karma.conf.js --single-run --log-level debug
    
