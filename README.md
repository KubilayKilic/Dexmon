# Pokemon Card App v2 - Dexmon

## Overview
The **Pokemon Card App** is a modern web application built with Next.js. It allows users to search for and view detailed information about Pokemon in an aesthetically pleasing card format. Each card dynamically adjusts its design based on the Pokemon’s type(s).

## Features
- **Dynamic Type Colors**: Pokemon cards display type-specific background colors and icons.
- **Type Blending**: For Pokemon with multiple types, blended background colors enhance the design.
- **Responsive Design**: Optimized for various screen sizes.
- **Detailed Stats**: Displays essential stats like HP, Attack, and Defense.
- **Modern Architecture**: Uses Next.js for server-side rendering and dynamic routes.

## Technologies Used
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **Icons**: Custom icons for Pokemon types
- **Images**: Optimized with Next.js Image component

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pokemon-card-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pokemon-card-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).


## Components
### PokemonCard
- Displays the main card with the Pokemon’s name, image, type, and stats.
- Utilizes the `ColorBlendedBG` component for dynamic background blending.

### ColorBlendedBG
- Blends the background colors of multiple Pokemon types.
- Ensures visual harmony using color manipulation logic.

### TypeIcons
- Dynamically renders icons for Pokemon types.
- Uses a consistent design language to match the app’s theme.

## Roadmap
- **Pagination**: Add support for browsing through a list of Pokemon.
- **Advanced Search**: Enable filtering by type, ability, and base stats.
- **Animations**: Add subtle animations to improve interactivity.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, feel free to reach out:
- **GitHub**: [KubilayKilic](https://github.com/KubilayKilic)
- **Email**: kilickubilaykaan@gmail.com

## Pokemon Types Chart
During the testing and development of this application, I utilized a detailed Pokemon Types Chart to better understand the relationships and interactions between different Pokemon types. You can explore this chart for reference or further study [here](https://github.com/KubilayKilic/Pokemon-Types-Chart)
It's just a fun little project to understand Next.js and fetch process a bit more.


This project is made for educational purposes only, to learn Next.js.
