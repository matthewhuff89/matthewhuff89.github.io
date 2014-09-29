class Warrior
  def initialize(name, race, specialty, weapon)
    @name = name
    @race = race
    @weapon = weapon
    @specialty = specialty
  end

    def stats_page
      stats = {"name" => @name, "race" => @race,
        "weapon" => @weapon, "specialty" => @specialty}
        puts stats
    end

    def backstory
      puts "What's up #{@name}, come sit down a bit. What's your story?"
      your_story = gets
      puts "What a totally badass story."
      end
end

murok = Warrior.new("Murok", "Orc", "Kicking Ass","Badass Axe")
murok.stats_page
murok.backstory