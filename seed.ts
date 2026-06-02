import { prisma } from "./lib/prisma";


import universities from "./data/universities.json";
import programs from "./data/programs.json";



async function main() {
  console.log("🌱 Seeding started...");

  
  for (const uni of universities) {
    await prisma.university.upsert({
      where: { name: uni.name },
      update: uni,
      create: uni,
    });
  }

  console.log(" Universities seed successfulllay");

  
  for (const p of programs) {
    const uni = await prisma.university.findUnique({
      where: { name: p.university },
    });

    if (!uni) {
      console.log(`oh no you f uniii: ${p.university}`);
      continue;
    }

    const program = await prisma.program.create({
      data: {
        universityId: uni.id,
        name: p.name,
        degree: p.degree,
        durationYears: p.durationYears,
        minaggRequired: p.minaggRequired,
      },
    });

   
    for (const tagName of p.tags) {
      const tag = await prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName },
      });

      await prisma.programTag.create({
        data: {
          programId: program.id,
          tagId: tag.id,
        },
      });
    }
  }

  console.log("program completed sucessfulaay");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });