# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [1.4.0] - 2016-07-21
### Added
- Added support and tests for explicit Objects
- Added tests around `RegExp` constructor use of the type decorator

### Changed
- n/a

### Fixed
- n/a

### Removed
- n/a

## [1.3.0] - 2016-07-20
### Added
- Added tests for custom types (class constructors) and functions values returned by specific constructors (eg.: Array, String, Number, null, undefined)

### Changed
- n/a

### Fixed
- Fixed an issue where specific constructors did not return their expected function values (eg.: Array, String, Number, null, undefined)

### Removed
- Removed error prefix

## [1.2.0] - 2016-07-20
### Added
- n/a

### Changed
- n/a

### Fixed
- n/a

### Removed
- Removed global definition of the `type` object

## [1.1.0] - 2016-07-20
### Added
- n/a

### Changed
- `index.js` no longer depends on `babel-plugin-transform-runtime` to import `Object.assign` or `System.global`

### Fixed
- n/a

### Removed
- `babel-plugin-transform-runtime` removed from root `.babelrc`