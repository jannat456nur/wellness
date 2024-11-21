/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const navigation = {
  Categories: [
    { name: 'Nutrition and diet', href: '#' },
    { name: 'Fitness training', href: '#' },
    { name: 'Mindfulness', href: '#' },
    { name: 'Mental health', href: '#' },
    { name: 'Personal growth', href: '#' },
    { name: 'Social well-being', href: '#' },

  ],
  About: [
    { name: 'About us', href: '#' },
    { name: 'Our partners', href: '#' },
    { name: 'Investors', href: '#' },
    { name: 'Career', href: '#' },
  ],
  Resources: [
    { name: 'FAQ', href: '#' },
    { name: 'Refund policies', href: '#' },
    { name: 'Terms and conditions', href: '#' },
    { name: 'Cookie', href: '#' },
    { name: 'Latest posts', href: '#' },
  ],
  Support: [
    { name: 'Get in touch', href: '#' },
    { name: 'Visit our forum', href: '#' },

  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M6.293 6.293a1 1 0 011.414 0L12 9.586l4.293-4.293a1 1 0 111.414 1.414L13.414 11l4.293 4.293a1 1 0 11-1.414 1.414L12 12.414l-4.293 4.293a1 1 0 11-1.414-1.414L10.586 11 6.293 6.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },


    {
      name: 'Discord',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 3.158 1.875 5.91 4.495 7.335C6.931 19.84 7.506 19.77 8.002 19.49c.252-.143.512-.29.76-.44C9.271 18.914 10.483 18 12 18c1.517 0 2.729.914 3.238 1.51.248.15.508.297.76.44.496.28.071.35.506.845C20.125 17.91 22 15.158 22 12c0-5.523-4.477-10-10-10zM6.1 6.558c.702-.336 1.392-.598 2.088-.765.53-.043 1.064-.075 1.59-.107.707-.05 1.401-.116 2.095-.162.695-.046 1.394-.078 2.097-.118 1.117-.06 2.275-.11 3.426-.176 1.243.065 2.46.136 3.674.205.769.063 1.532.137 2.294.21 1.57-.003 3.152-.008 4.73.125.222-.182.44-.37.67-.552a7.086 7.086 0 01-3.83-.034c-.85-.358-1.527-.726-2.195-1.102-.446-.266-.912-.548-1.398-.809-.333.003-.663.011-.994.015-.333-.004-.667-.014-1-.021-.332.006-.664.018-.995.027-.46.012-.916.03-1.372.05-.98.005-1.97-.042-2.939-.058-.98-.012-1.94.01-2.919.124-.125-.005-.246-.018-.373-.027-.467-.08-.934-.165-1.399-.248-.149-.005-.298-.016-.45-.027-.367-.071-.735-.14-1.103-.213-.324-.073-.653-.154-.975-.23-.078-.006-.158-.013-.237-.019-.264.07-.527.14-.791.211-.401-.076-.805-.155-1.207-.236-.006-.243.03-.486.027-.73z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },


   
  ],
}

export default function Example() {
  return (
    <footer className="bg-white max-w-[1100px] mx-auto" aria-labelledby="footer-heading">

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Categories Column */}
          <div>
            <h3 className="text-sm  text-gray-400">Categories</h3>
            <ul className="mt-6 space-y-4">
              {navigation.Categories.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-sm  text-gray-400">About</h3>
            <ul className="mt-6 space-y-4">
              {navigation.About.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm  text-gray-400">Resources</h3>
            <ul className="mt-6 space-y-4">
              {navigation.Resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm  text-gray-400">Support</h3>
            <ul className="mt-6 space-y-4">
              {navigation.Support.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex lg:justify-between border-t border-gray-200 pt-8 ">
          <p className="mt-8 text-lg font-semibold leading-5 text-black">Join our official channels.</p>

          <div className="flex space-x-6 mt-8 ">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-between border-t border-gray-200 pt-2">
       
          <p className="mt-8 text-xs leading-5 text-gray-500">&copy;2024 EduPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
