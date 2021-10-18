const dummyContent = '# Lorem ipsum dolor sit amet\n' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed fermentum purus. Sed ac pharetra tellus, nec rutrum tortor. Praesent feugiat eget risus nec molestie. Suspendisse ac lorem elementum, venenatis enim ac, tincidunt arcu. Vivamus cursus tincidunt risus vitae auctor. Duis gravida est ut bibendum pellentesque. Maecenas mollis tempor eros in ullamcorper. Morbi eu fringilla neque. Quisque elit neque, sollicitudin scelerisque quam vulputate, euismod ultrices mauris. In pellentesque lectus sem, non rutrum quam gravida eu. Sed bibendum euismod dolor quis egestas. Sed elit arcu, varius id iaculis a, posuere nec ante.\n' +
    '\n' +
    '## Curabitur at enim imperdiet\n' +
    'Curabitur at enim imperdiet, varius neque sit amet, vestibulum lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque sit amet tortor vel ex tristique egestas sed a ante. Donec felis massa, rhoncus nec sem non, rhoncus maximus massa. Mauris eu efficitur lorem, sed maximus turpis. Suspendisse quis varius felis, id laoreet odio. Praesent pharetra turpis sem, quis aliquet felis hendrerit et.\n' +
    '\n' +
    '### Donec euismod, eros in luctus elementum\n' +
    'Donec euismod, eros in luctus elementum, turpis est facilisis orci, et faucibus nulla dui at metus. Nullam et arcu dictum, egestas neque id, venenatis eros. Duis malesuada dapibus auctor. Praesent porta ullamcorper fermentum. Nam tincidunt vel risus id cursus. Proin consectetur porta tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vulputate consequat porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vestibulum ipsum sit amet tellus consequat, quis molestie velit ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer imperdiet enim aliquam suscipit pretium. Nullam rhoncus sem libero, vel condimentum diam molestie a. Proin gravida eu arcu nec consequat.\n' +
    '\n' +
    '#### Proin et metus lorem\n' +
    'Proin et metus lorem. Sed ultrices, leo vel blandit vulputate, ligula erat condimentum tortor, nec rhoncus velit ipsum sit amet tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sollicitudin tristique tortor sed ultrices. Aliquam eu ligula ac diam feugiat venenatis. Donec quis massa ac tellus tempus molestie sit amet vel diam. Pellentesque ac mattis massa, vel mattis arcu. Sed vel ex tellus. Suspendisse potenti. Cras viverra libero tortor, non accumsan nunc commodo quis.\n' +
    '\n' +
    '##### Duis fringilla lacinia nisl\n' +
    'Duis fringilla lacinia nisl, sit amet placerat ante dignissim nec. Morbi sit amet odio dictum neque imperdiet rutrum. Nulla felis mi, faucibus eget ligula id, luctus laoreet mi. Sed in felis vitae orci convallis semper eu ut sem. Suspendisse scelerisque nunc vel efficitur efficitur. Mauris sed erat bibendum, accumsan est a, tempor nisl. Pellentesque lacus risus, cursus sed accumsan at, commodo non leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at scelerisque dui. Vivamus ullamcorper, est et elementum dictum, turpis leo aliquet purus, in malesuada magna mauris id metus. Aliquam ac rhoncus neque. Duis blandit, purus sit amet tempus imperdiet, lacus arcu elementum turpis, eu gravida purus elit quis purus. Etiam aliquam sapien sed dignissim venenatis. Quisque eu sem sed lacus auctor lobortis. Integer pretium ante eu interdum molestie. '


const entities = new Map<number, any>()
for (let id = 1; id < 10; id++) {
    entities.set(id, {
        title: `title ${id}`,
        subtitle: 'Marvelous!',
        content: dummyContent,
        active: id % 3 === 0
    })
}

export { entities as entityCollection }
